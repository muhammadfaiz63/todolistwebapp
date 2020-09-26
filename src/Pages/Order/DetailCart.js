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


function DetailCart(props) {

  const { pathname } = props.location
  const { category } = props.match.params
  const titlePage = "Rider"
  const classes = useStyles();

  const [data, setdata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filtermenu, setfiltermenu] = useState("");
  const [search, setsearch] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const datafield = ["No", "Nama Menu","Permintaan Khusus","Harga","Jumlah","Jumlah Harga"]

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);


  return (
      <div>
          <PageTitle
                title={
                    <Grid container style={{paddingBottom:5}}>
                        <IconButton style={{backgroundColor:Colors.background}} component={Link} to="/home"><ArrowBackIcon style={{fontSize:16,color:"#fff"}}/></IconButton>
                        <Typography className={[classes.titlePrimaryTxt,classes.spacing]}>Rincian Pesanan</Typography>
                    </Grid>
                }
            />
            <div className={classes.containerResponsive}>
                
                    <Typography className={classes.gray3Txt}>Nomor Pesanan</Typography>
                    <Typography className={classes.titleBlack2Txt}>02345</Typography>
                    <Typography className={[classes.gray3Txt,classes.top10px]}>Nama Pemesan</Typography>
                    <Typography className={classes.titleBlack2Txt}>Ahmad Sodikin</Typography>
                    <Typography className={[classes.gray3Txt,classes.top10px]}>Nomor Telepon</Typography>
                    <Typography className={classes.titleBlack2Txt}>087672316543</Typography>
                    <Typography className={[classes.gray3Txt,classes.top10px]}>Alamat</Typography>
                    <Typography className={classes.titleBlack2Txt}>Gang. Jambon, Jalan Raya Padurenan RT. 01/01 Bantar Gebang, Kota Bekasi</Typography>
                    <Typography className={[classes.gray3Txt,classes.top10px]}>Detail Lokasi</Typography>
                    <Typography className={classes.titleBlack2Txt}>Belakang Pabrik Terasi</Typography>
                
            </div>
            <Grid container style={{width:"100%",height:50,marginTop:10,marginBottom:20,paddingTop:7,backgroundColor:"#F8F8F8",justifyContent:"center"}}>
                <Typography className={classes.menuTxt}>Menu yang dipesan</Typography>
            </Grid>
            <div className={classes.containerResponsive}>
            {/* <Card style={{ backgroundColor: "#fff", borderRadius: 0 }}> */}
                    <Table>
                        <TableHead style={{ backgroundColor: "transparent", borderRadius:0,borderTop:"1px solid #BDBDBD",borderBottom:"1px solid #BDBDBD" }}>
                            <TableRow>
                                {
                                    datafield.map((item,index) => (
                                        <TableCell key={index} style={{ padding:0,paddingLeft:10,fontSize: 13, fontWeight: 700, color: "#000" }}>{item}</TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                menu.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item, index) => (
                                        <StyledTableRow key={index}>
                                            <TableCell style={{width:50,padding:10}}>
                                                <Typography className={classes.txtContentTable}>
                                                    {page * rowsPerPage + (index + 1)}
                                                </Typography>
                                            </TableCell>
                                            <TableCell style={{width:200,padding:10}}>
                                                <Typography style={{ fontWeight: 600, fontSize: 13 }}>
                                                    {item.name}
                                                </Typography>
                                            </TableCell>
                                            <TableCell style={{width:250,padding:10}}>
                                                <Typography style={{ fontWeight: 600, fontSize: 13 }}>
                                                    {item.request ? item.request : "-"}
                                                </Typography>
                                            </TableCell>
                                            <TableCell style={{width:150,padding:10}}>
                                                <Typography style={{ fontWeight: 600, fontSize: 13 }}>
                                                    {item.price}
                                                </Typography>
                                            </TableCell>
                                            <TableCell style={{width:150,padding:10}}>
                                                <Typography style={{ fontWeight: 600, fontSize: 13 }}>
                                                    {item.price}
                                                </Typography>
                                            </TableCell>
                                            <TableCell style={{width:150,padding:10}}>
                                                <Typography style={{ fontWeight: 600, fontSize: 13 }}>
                                                    {item.price}
                                                </Typography>
                                            </TableCell>
                                        </StyledTableRow>
                                    ))
                            }

                        </TableBody>
                    </Table>
                    <Grid container style={{justifyContent:"flex-end"}}>
                        <div style={{width:400,backgroundColor:"#B3DA4D",padding:10}}>
                        <Grid container style={{justifyContent:"space-between"}}>
                            <Typography className={classes.titleTxt}>
                                Total Harga
                            </Typography>
                            <Typography className={classes.titleTxt}>
                                80.000
                            </Typography>
                        </Grid>
                        </div>
                    </Grid>
                    <Grid container style={{justifyContent:"center"}}>
                        <img src={Images.kurirImg} style={{height:350}}/>
                    </Grid>
                    <Grid container style={{justifyContent:"center"}}>
                    <Typography className={[classes.gray3Txt,classes.spacing3]}>Siapa yang akan antar pesanan ini?</Typography>
                    </Grid>
                    {/* <TablePagination
                        rowsPerPageOptions={[10, 25, 50, 100, 500]}
                        component="div"
                        count={menu.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{
                            "aria-label": "previous page",
                        }}
                        nextIconButtonProps={{
                            "aria-label": "next page",
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    /> */}

                {/* </Card> */}
            </div>
            <Grid container style={{justifyContent:"center",marginTop:10,marginBottom:20}}>
            <Button className={classes.makeOrderBtn} component={Link} to="/home/cartorder/detail">
                <Typography className={classes.txtAction}>Cari Rider Delivery</Typography>
            </Button>
            </Grid>
      </div>
    
  )
}


export default withRouter(DetailCart);