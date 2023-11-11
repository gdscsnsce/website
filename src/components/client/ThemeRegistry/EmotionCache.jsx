import createCache from '@emotion/cache';
import { CacheProvider as DefaultCacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import * as React from 'react';

/**
 * From MUI Starter Code
 * @property {Omit<OptionsOfCreateCache, 'insertionPoint'>} options This is the options passed to createCache() from 'import createCache from "@emotion/cache"'
 * @property {(props: { value: EmotionCache; children: React.ReactNode; }) => React.JSX.Element | null} CacheProvider By default <CacheProvider /> from 'import { CacheProvider } from "@emotion/react"'
 * @property {React.ReactNode} children
 *
 * @see https://github.com/garronej/tss-react/blob/main/src/next/appDir.tsx
 * @see https://github.com/mui/material-ui/blob/master/examples/material-next-app-router-ts/src/components/ThemeRegistry/EmotionCache.tsx
 */
export const NextAppDirEmotionCacheProvider = ({ options, CacheProvider = DefaultCacheProvider, children }) => {
	const [registry] = React.useState(() => {
		const cache = createCache(options);
		cache.compat = true;
		const prevInsert = cache.insert;
		/** @type { name: string; isGlobal: boolean }[] */
		let inserted = [];
		cache.insert = (...args) => {
			const [selector, serialized] = args;
			if (cache.inserted[serialized.name] === undefined) {
				inserted.push({
					name: serialized.name,
					isGlobal: !selector,
				});
			}
			return prevInsert(...args);
		};
		const flush = () => {
			const prevInserted = inserted;
			inserted = [];
			return prevInserted;
		};
		return { cache, flush };
	});

	useServerInsertedHTML(() => {
		const inserted = registry.flush();
		if (inserted.length === 0) {
			return null;
		}
		let styles = '';
		let dataEmotionAttribute = registry.cache.key;

		/** @type { name: string; style: string; }[] */
		const globals = [];

		inserted.forEach(({ name, isGlobal }) => {
			const style = registry.cache.inserted[name];

			if (typeof style !== 'boolean') {
				if (isGlobal) {
					globals.push({ name, style });
				} else {
					styles += style;
					dataEmotionAttribute += ` ${name}`;
				}
			}
		});

		return (
			<>
				{globals.map(({ name, style }) => (
					<style
						key={name}
						data-emotion={`${registry.cache.key}-global ${name}`}
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: style }}
					/>
				))}
				{styles && (
					<style
						data-emotion={dataEmotionAttribute}
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: styles }}
					/>
				)}
			</>
		);
	});

	return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
};
