/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useApp } from '@tldraw/react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import type { Shape } from '../../lib'
import { TablerIcon } from '../icons'
import { Button } from '../Button'
import { ZoomMenu } from '../ZoomMenu'

export const ActionBar = observer(function ActionBar(): JSX.Element {
  const app = useApp<Shape>()
  const undo = React.useCallback(() => {
    app.api.undo()
  }, [app])

  const redo = React.useCallback(() => {
    app.api.redo()
  }, [app])

  const zoomIn = React.useCallback(() => {
    app.api.zoomIn()
  }, [app])

  const zoomOut = React.useCallback(() => {
    app.api.zoomOut()
  }, [app])

  return (
    <div className="tl-action-bar">
      <div className="tl-button-bar tl-history-bar">
        <Button title="Undo" onClick={undo}>
          <TablerIcon name="arrow-back-up" />
        </Button>
        <Button title="Redo" onClick={redo}>
          <TablerIcon name="arrow-forward-up" />
        </Button>
      </div>

      <div className="tl-button-bar tl-zoom-bar">
        <Button title="Zoom in" onClick={zoomIn} id="tl-zoom-in">
          <TablerIcon name="plus" />
        </Button>
        <Button title="Zoom out" onClick={zoomOut} id="tl-zoom-out">
          <TablerIcon name="minus" />
        </Button>
        <ZoomMenu />
      </div>
    </div>
  )
})
