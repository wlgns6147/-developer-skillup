import React, { useRef, useEffect } from 'react'
import {LUXDataGrid2} from '@luna-grid/luxdatagrid2-base/dist'

const Grid = (props) => {
    const gridRef = useRef()
    useEffect(() => {
      const gridMain = gridRef.current;
      props.data && gridMain.bindData(props.data);
      props.bind && props.bind(gridMain);
    }, [])
    return <LUXDataGrid2
        ref={gridRef}
        gridSetting={props.gridSetting}
    />
}

export default Grid;


