import React, { useState, useEffect } from 'react';

import Select from "react-select";
import imageCompression from "browser-image-compression";
import { Link } from "react-router-dom";
import _ from "lodash"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import moment from "moment"

import chroma from 'chroma-js';

import LoadPanel from 'devextreme-react/load-panel';

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    Grid,
    Hidden,
    TextField,
    CircularProgress,
    Table,
    TableCell,
    TableBody,
    TableRow,
    TableHead,
    TablePagination,
    Card,
    InputLabel,
    MenuItem,
    FormControl
} from '@material-ui/core';

import {
    LockOpen as LockOpenIcon,
    Info as InfoIcon,
    Dashboard as DashboardIcon,
    Equalizer as EqualizerIcon,
    ExitToApp as ExitToAppIcon,
    NavigateNext as NavigateNextIcon,
    Search as SearchIcon,
    ChevronRight as ChevronRightIcon,
    Add as AddIcon,
    DateRange as DateRangeIcon,
    Delete as DeleteIcon,
    Edit as EditIcon,
    AddAPhoto as AddAPhotoIcon,
    VerifiedUser as VerifiedUserIcon,
    Person as PersonIcon,
    ShoppingBasket as ShoppingBasketIcon,
    ArrowBack as ArrowBackIcon,
    Remove as RemoveIcon
} from '@material-ui/icons';

import { withRouter, NavLink } from 'react-router-dom';
import PageTitle from "../../Components/PageTitle/PageTitle";
import FakeToolbar from "../../Components/FakeToolbar/FakeToolbar";
import Modal from '../../Components/Modal/Modal'
import CardTotal from '../../Components/CardTotal/CardTotal'
import useStyles from './Styles';
// import { menu } from './Data.js';
import Api from './../../Services/ApiPrivate'
import ApiUpload from './../../Services/ApiUpload'
import Images from "../../Themes/Images"
import StaticVar from '../../Config/StaticVar';
import Colors from "../../Themes/Colors"

import { menu } from '../Home/Data';


function CartOrder(props) {

  const { pathname } = props.location
  const { category } = props.match.params
  const titlePage = "Rider"
  const classes = useStyles();

  const [data, setdata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filtermenu, setfiltermenu] = useState("");
  const [search, setsearch] = useState("");

  const dataMenu = [
    {
        "_id": 1,
        "value": "Data 1",
        "label": "Data 1"
    },
    {
        "_id": 2,
        "value": "Data 2",
        "label": "Data 2"
    }
  ]

  const handleFilterMenu = (selected) => {
      setfiltermenu(selected ? selected.value : "");
  }

  const selectBoxStyles = {
    control: styles => ({ ...styles, height:32,backgroundColor:"#f2f2f2",borderRadius:5,border:"2px solid #f2f2f2" }),
    menuPortal: base => ({ ...base, zIndex: 9999 })
  };

  const searchData = (e) => {
    const searchtxt = e.target.value;
    setsearch(searchtxt)
    const datasearch = data.filter((item) => {
      return item.nama_barang.toString().toLowerCase().indexOf(searchtxt.toString().toLowerCase()) > -1
    })
    setFilteredData(datasearch)
  }


  return (
      <div>
          <PageTitle
                title={
                    <Grid container style={{paddingBottom:5}}>
                        <IconButton style={{backgroundColor:Colors.background}} component={Link} to="/home"><ArrowBackIcon style={{fontSize:16,color:"#fff"}}/></IconButton>
                        <Typography className={[classes.titlePrimaryTxt,classes.spacing]}>Keranjang Pesanan</Typography>
                    </Grid>
                }
            />
            <div className={classes.containerResponsive}>
                    <Grid container>
                        {
                            menu.map((item,index)=>(
                                <Grid item md={12} style={{borderBottom:"1px dashed #A7A7A7",paddingBottom:5,paddingTop:20}}>
                                    <Grid container>
                                        <div><Typography className={classes.blackTxt}>{index + 1}</Typography></div>
                                        <div><img src={item.img} style={{height:50,borderRadius:5,marginLeft:20,marginRight:20}}/></div>
                                        <div>
                                            <Typography className={[classes.blackTxt,classes.top5px]}>{item.name}</Typography>
                                            <Grid container style={{marginTop:5}}>
                                                <Typography className={classes.blackTxt}>{item.price}</Typography>
                                                <Typography className={[classes.strikeThroughGrayRightTxt,classes.left20px]}>{item.price}</Typography>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <div style={{marginLeft:25}}>
                                        <Typography className={classes.grayTxt}>Jumlah</Typography>
                                        <Grid container>
                                            <RemoveIcon className={classes.titlePrimaryTxt}/>
                                            <Typography className={[classes.titleBlackTxt,classes.spacing2]}>0</Typography>
                                            <AddIcon className={classes.titlePrimaryTxt}/>
                                        </Grid>
                                    </div>
                                    <div style={{paddingLeft:25,paddingTop:15,paddingRight:25}}>
                                    {/* <Typography className={classes.titleBlack2Txt}>Permintaan Khusus</Typography> */}
                                    <InputLabel style={{fontSize:14}}>Permintaan Khusus</InputLabel>
                                    <FormControl style={{ width:"100%",top:-10 }}>
                                        <TextField
                                        margin="normal"
                                        variant="outlined"
                                        label={false}
                                        placeholder="Tulis Permintaan Khusus"
                                        type="search"
                                        className={classes.txtSearch}
                                        onChange={(e) => searchData(e)}
                                        name="search"
                                        value={search}
                                        InputProps={{
                                            className: classes.multilineColor
                                        }}
                                        />
                                    </FormControl>
                                    </div>
                                </Grid>
                            ))
                        }
                        
                    </Grid>
            </div>
            <Grid container style={{justifyContent:"center",marginTop:10,marginBottom:20}}>
            <Button className={classes.makeOrderBtn} component={Link} to="/home/cartorder/detail">
                <Typography className={classes.txtAction}>Buat Pesanan</Typography>
            </Button>
            </Grid>
      </div>
    
  )
}


export default withRouter(CartOrder);