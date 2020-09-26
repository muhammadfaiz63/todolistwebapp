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
    ShoppingBasket as ShoppingBasketIcon
} from '@material-ui/icons';

import { withRouter, NavLink } from 'react-router-dom';
import PageTitle from "../../Components/PageTitle/PageTitle";
import FakeToolbar from "../../Components/FakeToolbar/FakeToolbar";
import Modal from '../../Components/Modal/Modal'
import CardTotal from '../../Components/CardTotal/CardTotal'
import useStyles from './Styles';
import { menu } from './Data.js';
import Api from './../../Services/ApiPrivate'
import ApiUpload from './../../Services/ApiUpload'
import Images from "../../Themes/Images"
import StaticVar from '../../Config/StaticVar';
import Colors from "../../Themes/Colors"


function Home(props) {

  const { pathname } = props.location
  const { category } = props.match.params
  const titlePage = "Rider"
  const classes = useStyles();

  const [data, setdata] = useState([]);
  const [datamerchant, setdatamerchant] = useState([]);
  const [datamenu, setdatamenu] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filtermenu, setfiltermenu] = useState("");
  const [search, setsearch] = useState("");

  const [ modalcustomer , setmodalcustomer ] = useState(true)
  const [ titlemodal , settitlemodal ] = useState("Data Customer")

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

  const getDataMerchant = () => {
    Api.getMerchant().then(res=>{
        // console.log("res data",res.data)
        setdatamerchant(res.data)
        var datamenumerchant = []

        res.data.map(item=>{
          if(item.merchantProduct.length > 0){
            item.merchantProduct.map(val=>{
              datamenumerchant.push(val)
            })
          }
        })

        datamenumerchant.map(item=>{item["active"] = false})

        setdatamenu(datamenumerchant)
        
      }).catch(err=>{
          console.log("Err",err)
      })
    }

  const handleModalCustomer = () =>{
    setmodalcustomer(true)
    settitlemodal("Data Customer")
  }

  const handleModalClose = () =>{
    setmodalcustomer(false)
  }

  useEffect(()=>{
    getDataMerchant()
  },[])

  const chooseMenu = (val,dataindex) =>{
  }


  return (
    <div className={classes.containerResponsive}>
      <Grid container style={{justifyContent:"space-between"}}>
          <div>
            <Grid container>
              <img src={Images.hoodaFoodCircleImg} style={{width:95,marginTop:24,marginRight:10}}/>
              <Typography className={[classes.contentCardTotalLeftBlackTxt,classes.top45px]}>Food Circle</Typography>  
            </Grid>
          </div>
          <div> 
            <Grid container style={{marginTop:30}}>
                <div>
                <Typography className={[classes.grayTxt,classes.left10px]}>Data Customer</Typography>
                <Button className={classes.notActiveBtn} variant="contained" onClick={handleModalCustomer}>
                    <PersonIcon style={{fontSize:24,color:Colors.primary,marginRight:10}}/>
                    <Typography className={classes.orderPrimaryTxt}>Isi Data Customer</Typography>
                    <NavigateNextIcon style={{fontSize:24,color:Colors.primary,marginLeft:20}}/>
                </Button>
                </div>
                <div>
                <Typography className={[classes.grayTxt,classes.left10px]}>Keranjang Pesanan</Typography>
                <Button className={classes.notActiveBtn} variant="contained" component={Link} to="/home/cartorder">
                    <ShoppingBasketIcon style={{fontSize:24,color:Colors.primary,marginRight:10}}/>
                    <Typography className={classes.orderPrimaryTxt}>0 Item</Typography>
                    <NavigateNextIcon style={{fontSize:24,color:Colors.primary,marginLeft:20}}/>
                </Button>
                </div>
            </Grid>
          </div>
      </Grid>
      <Grid container style={{justifyContent:"space-between"}}>
        <div style={{marginTop:20}}>
          <Typography className={classes.grayTxt}>Daftar Menu</Typography>
          <FormControl style={{ width:200 }}>
            <Select
                styles={selectBoxStyles}
                menuPortalTarget={document.body}
                placeholder="Pilih Menu"
                options={dataMenu}
                isSearchable={true}
                isClearable={true}
                onChange={selected => handleFilterMenu(selected)}
                value={dataMenu.filter(
                    option => option.value === filtermenu
                )}
              />
            </FormControl>
          </div>
          <div style={{marginTop:20}}>
          <FormControl style={{ width:400 }}>
            <TextField
              margin="normal"
              variant="outlined"
              label={false}
              placeholder="Cari nama menu"
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
      <Grid container style={{marginTop:20}}>
        {
            datamenu.map((val,index)=>{
              return(
                <Grid item key={index} className={classes.containerCardMenu}> 
                <Button onClick={()=>chooseMenu(val,index)}>
                  <Card style={{
                    padding:0,
                    width:"100%",
                    height:210,
                    borderRadius:10,
                    backgroundColor:val.active ? "rgba(82, 186, 209, 0.65)" : "#fff",
                    boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.15)",
                    backdropFilter:val.active ? "blur(2px)" : "",
                    opacity:val.active ? 0.9 : "",
                  }}>
                      <img src={val.ProductPicture ? val.ProductPicture : Images.fastFoodExampleImg} style={{height:140,width:"100%"}}/>
                      <Typography className={classes.gray2Txt}>{val.ProductName}</Typography>
                      <Grid container style={{paddingLeft:11,paddingTop:10,justifyContent:"space-between",paddingRight:11}}>
                        <Typography className={classes.blackTxt}>{val.ProductPrice}</Typography>
                        <Typography className={classes.strikeThroughGrayRightTxt}>{val.ProductPrice}</Typography>
                      </Grid>
                  </Card>
                </Button>
              </Grid>
              )
            })
        }
      </Grid>

      <Modal
        open={modalcustomer}
        close={handleModalClose}
        bgcolor={Colors.backgroundScreen}
        title={<Typography className={classes.titleModalTxt}>{titlemodal}</Typography>}
        content={
          <div style={{width:800}}>
                <Typography className={classes.labelInputTxt}>Nama Pemesan</Typography>
                <FormControl style={{ width:"100%",top:-15 }}>
                    <TextField
                    margin="normal"
                    variant="outlined"
                    label={false}
                    placeholder="Tulis Nama Pemesan"
                    type="search"
                    className={classes.txtSearch}
                    name="search"
                    value={search}
                    InputProps={{
                        className: classes.multilineColorWhite
                    }}
                    />
                </FormControl>

                <Typography className={classes.labelInputTxt}>Nomor Telepon</Typography>
                <FormControl style={{ width:"100%",top:-15 }}>
                    <TextField
                    margin="normal"
                    variant="outlined"
                    label={false}
                    placeholder="Tulis Nomor Telepon"
                    type="search"
                    className={classes.txtSearch}
                    name="search"
                    value={search}
                    InputProps={{
                        className: classes.multilineColorWhite
                    }}
                    />
                </FormControl>

                <Typography className={classes.labelInputTxt}>Alamat</Typography>
                <FormControl style={{ width:"100%",top:-15 }}>
                <TextField
                    InputProps={{
                      id: 'announcementText',
                      multiline: true,
                      rows: 4,
                      className: classes.multilineTextAreaWhite
                    }}
                    variant="outlined"
                    
                    placeholder="Tulis Alamat"
                    margin="normal"
                    name="content"
              />
                </FormControl>

                <Typography className={classes.labelInputTxt}>Detail Lokasi</Typography>
                <FormControl style={{ width:"100%",top:-15 }}>
                    <TextField
                    margin="normal"
                    variant="outlined"
                    label={false}
                    placeholder="Tulis Detail Lokasi"
                    type="search"
                    className={classes.txtSearch}
                    name="search"
                    value={search}
                    InputProps={{
                        className: classes.multilineColorWhite
                    }}
                    />
                </FormControl>
                <Grid container style={{justifyContent:"center",marginTop:10,marginBottom:20}}>
                <Button className={classes.makeOrderBtn} onClick={handleModalClose}>
                    <Typography className={classes.txtAction}>Simpan</Typography>
                </Button>
                </Grid>
          </div>
        }
      />
    </div>
  )
}


export default withRouter(Home);