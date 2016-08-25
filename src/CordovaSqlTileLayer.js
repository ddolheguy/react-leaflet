/* @flow */

import { tileLayer } from 'leaflet-cordova'
import { PropTypes } from 'react'

import BaseTileLayer from './BaseTileLayer'

export default class CordovaSqlTileLayer extends BaseTileLayer {
  static propTypes = {
    db: PropTypes.string.isRequired,
  };

  componentWillMount () {
    super.componentWillMount()
    const { db, ...props } = this.props
    console.log('React-Leaflet - mounting sql');
    this.leafletElement = tileLayer.cordovaSql(db, props)
  }
}
