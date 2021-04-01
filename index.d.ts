/**
 * Get the latest version of npm package.
 *
 * ```js
 * import { getNpmPkgVersion } from 'get-npm-package-version'
 * getNpmPkgVersion('react') //=> "17.0.2"
 * ```
 *
 * @param packageName Package to find
 * @param [opts] {registry?: string, timeout?: number}
 * @returns version string | null
 */
export function getNpmPkgVersion(packageName: string, opts?: { registry?: string, timeout?: number }): string | null

export default getNpmPkgVersion
