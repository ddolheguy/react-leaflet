/* @flow */

import { tileLayer } from 'leaflet-cordova'
import { PropTypes } from 'react'

import BaseTileLayer from './BaseTileLayer'

export default class CordovaSqlTileLayer extends BaseTileLayer {
  static propTypes = {
    db: PropTypes.object.isRequired,
  };

  componentWillMount () {
    super.componentWillMount()
    const { db, ...props } = this.props
    this.leafletElement = tileLayer.cordovaSql(db, props)
  }
}
