/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onClientEntry = () => {}
export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log(
    'Navigation from [',
    prevLocation ? prevLocation.pathname : null,
    '}',
    'to {',
    location.pathname,
    '}',
  )
}

export { default as wrapRootElement } from './src/state/ReduxWrapper'
