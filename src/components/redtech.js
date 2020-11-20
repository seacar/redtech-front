import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import RightArrowIcon from '@material-ui/icons/DoubleArrow'
import LeftArrowIcon from '@material-ui/icons/ArrowBack'

const panels = ['Zoning', 'Architecture', 'Construction', 'Operations', 'Development', 'Financing', 'Summary'];

class RedTech extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            selectedPanel: 'Zoning'
        };
      }

    render() {

        return (
            <div className="container">
            <Grid container spacing={6}>
                <Grid item md={2}>
                <MenuList>
                    {panels.map((panel, index) =>
                        <MenuItem key={index} value={panel} selected={index === this.state.selectedIndex} onClick={() => this.setState({ selectedIndex: index, selectedPanel: panel })}>{panel}</MenuItem>
                    )}
                </MenuList>
                </Grid>
                <Grid item md={10}>

                </Grid>
                <Grid item md={12} className="panel-nav">
                    {this.state.selectedIndex > 0 && 
                        <IconButton color='inherit' onClick={() => this.setState({ selectedIndex: this.state.selectedIndex - 1 })}>
                            <LeftArrowIcon />
                        </IconButton>
                    }

                    {this.state.selectedIndex < panels.length - 1 &&
                        <IconButton color='inherit' onClick={() => this.setState({ selectedIndex: this.state.selectedIndex + 1 })}>
                            <RightArrowIcon />
                        </IconButton>
                    }
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default RedTech