import React, { useState, useEffect,useRef } from 'react';

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
import Images from "../../Themes/Images"
import StaticVar from '../../Config/StaticVar';
import Colors from "../../Themes/Colors"


function Home(props) {

  const { pathname } = props.location
  const { category } = props.match.params
  const titlePage = "User"
  const classes = useStyles();

  const [data, setdata] = useState([]);
  const [datamerchant, setdatamerchant] = useState([]);
  const [datamenu, setdatamenu] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filtermenu, setfiltermenu] = useState("");
  const [search, setsearch] = useState("");

  const [modaluser, setmodaluser] = useState(false)
  const [modaluserdelete, setmodaluserdelete] = useState(false)
  const [titlemodal, settitlemodal] = useState("")
  const [typemodal, settypemodal] = useState("")

  const [id,setid] = useState("")
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [userid,setuserid] = useState("")
  const [password,setpassword] = useState("")
  const [gender,setgender] = useState("")
  const [phone,setphone] = useState("")
  const [photo,setphoto] = useState("")

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [isImgValid, setIsImgValid] = useState("");
  const [imgErrorMsg, setImgErrorMsg] = useState("");

  const [photoPreview, setphotoPreview] = useState("");
  const [img, setImg] = useState("");

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
    control: styles => ({ ...styles, height: 32, backgroundColor: "#f2f2f2", borderRadius: 5, border: "2px solid #f2f2f2" }),
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

  const handlemodaluser = (type,id) => {
    if(type === "delete"){
      setmodaluserdelete(true)
    }
    else{
      setmodaluser(true)
    }
    setid(id)
    settypemodal(type)
    settitlemodal("Form Input User")
    const datadetail = data.filter(item=>(item.id === id))
    setname(datadetail[0].name ? datadetail[0].name : "")
    setemail(datadetail[0].email ? datadetail[0].email : "")
    setuserid(datadetail[0].userid ? datadetail[0].userid : "")
    setpassword(datadetail[0].password ? datadetail[0].password : "")
    setgender(datadetail[0].gender ? datadetail[0].gender : "")
    setphone(datadetail[0].phone ? datadetail[0].phone : "")
    setphoto(datadetail[0].photo ? datadetail[0].photo : "")
    setphotoPreview(datadetail[0].photo ? StaticVar.URL_REPO + "images/" + datadetail[0].photo : "")

  }

  const handleModalClose = () => {
    setmodaluser(false)
    setmodaluserdelete(false)
  }

  const getDataUser = () => {
    Api.getUsers().then(res => {
      console.log("res data", res.data.result)
      setdata(res.data.result)
      setid(res.data.result.length + 1)
    }).catch(err => {
      console.log("err", err)
    })
  }

  useEffect(() => {
    getDataUser()
  }, [])

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

  const photouser = useRef(null);

  function handleInputphotouser() {
      photouser.current.click();
  }

  const handleFilephotouser = (e) =>{
    let reader = new FileReader();
    let file = e.target.files[0],
      pattern = /image-*/;

    if (!file.type.match(pattern)) {
      setIsImgValid(true);
      setImgErrorMsg("Format File tidak sesuai");
    }
    
    var options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 3000,
      useWebWorker: true
    }
    
    imageCompression(file, options)
      .then(function (compressedFile) {
        reader.onloadend = () => {
          setIsImgValid(false);
          setImgErrorMsg("");
          setphoto(compressedFile);
          setphotoPreview(reader.result);
        };

        reader.readAsDataURL(file);

      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  const handleSubmit = ()=>{

    let senddata = new FormData();
    senddata.append("name",name)
    senddata.append("email",email)
    senddata.append("userid",userid)
    senddata.append("password",password)
    senddata.append("gender",gender)
    senddata.append("phone",phone)
    senddata.append("photo",photo)

    if(typemodal === "create"){
        senddata.append("id", id);
        Api.postUsers(senddata).then(res=>{
          console.log("Res",res)
              getDataUser()
              handleModalClose()
          }).catch(err=>{
              console.log("Err",err)
              handleModalClose()
          })
    }

    else if(typemodal === "edit"){
      Api.putUsers(id,senddata).then(res=>{
        console.log("Res",res)
            getDataUser()
            handleModalClose()
        }).catch(err=>{
            console.log("Err",err)
            handleModalClose()
        })
    }
    else{
      Api.deleteUsers(id).then(res=>{
        console.log("Res",res)
            getDataUser()
            handleModalClose()
        }).catch(err=>{
            console.log("Err",err)
            handleModalClose()
        })
    }
  }


  const datafield = ["No", "Photo", "Nama", "Userid", "Gender", "Phone", "Action"]

  return (
    <div>
      <PageTitle
        title={<Grid container><Link to={`/home`} className={classes.titlePageTxt}>Daftar {titlePage}</Link></Grid>}
      />
      <div className={classes.containerResponsive}>
        <Grid container style={{ justifyContent: "flex-end" }}>
          <Grid item>
            <Grid container>
              <Grid item xs={9}>
                <TextField
                  margin="normal"
                  variant="outlined"
                  label={false}
                  placeholder="Cari?"
                  type="search"
                  className={classes.txtSearch}
                  onChange={(e) => searchData(e)}
                  name="search"
                  value={search}
                  InputProps={{
                    className: classes.multilineColor
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Button className={classes.btnSearch}><SearchIcon style={{ color: '#ffffff' }} /></Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item >
            <Button className={classes.inputBtn} variant="contained" onClick={() => {
              handlemodaluser("create",data.length + 1)
            }}>
              <AddIcon style={{ fontSize: 20, color: "#fff", marginRight: 5 }} />
              <Typography style={{ fontSize: 13, color: "#fff" }}>Tambahkan</Typography>
            </Button>
          </Grid>
        </Grid>
        <Card style={{ backgroundColor: "#fff", borderRadius: 0 }}>
          <Table>
            <TableHead style={{ backgroundColor: Colors.hover, borderRadius: 0, borderTop: "1px solid #BDBDBD", borderBottom: "1px solid #BDBDBD" }}>
              <TableRow>
                {
                  datafield.map((item, index) => (
                    <TableCell key={index} style={{ padding: 0, paddingLeft: 10, fontSize: 13, fontWeight: 700, color: "#fff" }}>{item}</TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item, index) => (
                    <StyledTableRow key={index}>
                      <TableCell style={{ width: 50, padding: 10 }}>
                        <Typography className={classes.txtContentTable}>
                          {page * rowsPerPage + (index + 1)}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ width: 200, padding: 10 }}>
                        <img src={StaticVar.URL_REPO + "images/" + item.photo} style={{width:60,height:60}}/>
                      </TableCell>
                      <TableCell style={{ width: 300, padding: 10 }}>
                        <Typography style={{ fontWeight: 600, fontSize: 13 }}>
                          {item.name}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ width: 150, padding: 10 }}>
                        <Typography style={{ fontWeight: 600, fontSize: 13 }}>
                          {item.userid}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ width: 200, padding: 10 }}>
                        <Typography style={{ fontWeight: 600, fontSize: 13 }}>
                          {item.gender}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ width: 150, padding: 10 }}>
                        <Typography style={{ fontWeight: 600, fontSize: 13 }}>
                          {item.phone}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ width: 300, padding: 10 }}>
                        <Button style={{ backgroundColor: Colors.hover, paddingLeft: 20, paddingRight: 20, marginRight: 10 }} onClick={()=>handlemodaluser("edit",item.id)}>
                          <Typography style={{ color: "#fff", fontSize: 14, marginRight: 5, textTransform: "none" }}>Edit</Typography><EditIcon style={{ color: "#fff", fontSize: 14 }} />
                        </Button>
                        <Button style={{ backgroundColor: Colors.hover, paddingLeft: 20, paddingRight: 20 }} onClick={()=>handlemodaluser("delete",item.id)}>
                          <Typography style={{ color: "#fff", fontSize: 14, marginRight: 5, textTransform: "none" }}>Delete</Typography><DeleteIcon style={{ color: "#fff", fontSize: 14 }} />
                        </Button>
                      </TableCell>
                    </StyledTableRow>
                  ))
              }

            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100, 500]}
            component="div"
            count={data.length}
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
          />

        </Card>

      </div>
      <Modal
        open={modaluser}
        close={handleModalClose}
        // bgcolor={Colors.hover}
        title={<Grid container style={{backgroundColor:Colors.hover,justifyContent:"center",padding:20}}><Typography style={{fontSize:24,color:"#fff"}}>{titlemodal}</Typography></Grid>}
        content={
          <div style={{ width: 500 }}>
            <Grid container spacing={2}>
            <Grid item xs={6} style={{marginTop:-15}}>
              <TextField
                margin="normal"
                variant="outlined"
                label="Nama"
                type="name"
                name="name"
                value={name}
                className={classes.txtSearch}
                onChange={(e)=>setname(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} style={{marginTop:-15}}>
              <TextField
                margin="normal"
                variant="outlined"
                label="Email"
                type="email"
                name="email"
                value={email}
                className={classes.txtSearch}
                onChange={(e)=>setemail(e.target.value)}
              />
            </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item xs={6} style={{marginTop:-15}}>
              <TextField
                margin="normal"
                variant="outlined"
                label="Userid"
                type="userid"
                name="userid"
                value={userid}
                className={classes.txtSearch}
                onChange={(e)=>setuserid(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} style={{marginTop:-15}}>
              <TextField
                margin="normal"
                variant="outlined"
                label="Password"
                type="password"
                name="password"
                value={password}
                className={classes.txtSearch}
                onChange={(e)=>setpassword(e.target.value)}
              />
            </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item xs={6} style={{marginTop:-15}}>
              <TextField
                margin="normal"
                variant="outlined"
                label="Jenis Kelamin"
                type="gender"
                name="gender"
                value={gender}
                className={classes.txtSearch}
                onChange={(e)=>setgender(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} style={{marginTop:-15}}>
              <TextField
                margin="normal"
                variant="outlined"
                label="Telepon"
                type="phone"
                name="phone"
                value={phone}
                className={classes.txtSearch}
                onChange={(e)=>setphone(e.target.value)}
              />
            </Grid>
            </Grid>
            <Grid container style={{ marginBottom: 10 }}>
              <input
              accept="image/*"
              className={classes.inputUpload}
              multiple
              ref={photouser}
              type="file"
              onChange={e => handleFilephotouser(e)}
              />
              <Button
                  className={classes.btnUpload}
                  onClick={handleInputphotouser}
              >
                  {
                      photoPreview ?
                    <img src={photoPreview} style={{width:"100%", height:"100%"}}/> :
                    <div>
                  <AddAPhotoIcon style={{color:"#BDBDBD",fontSize:40}}/>
                  <Typography style={{ fontStyle:"italic",color:"#BDBDBD" }}>
                      Unggah Foto
                  </Typography>
                  </div> 
                  } 
              </Button>
          </Grid>

            <Grid container style={{ marginTop: 10, marginBottom: 20 }}>
              <Button className={classes.closeBtn} onClick={handleModalClose}>
                <Typography className={classes.txtAction2}>Batal</Typography>
              </Button>
              <Button className={classes.makeOrderBtn} onClick={handleSubmit}>
                <Typography className={classes.txtAction}>Simpan</Typography>
              </Button>
            </Grid>
          </div>
        }
      />

<Modal
        open={modaluserdelete}
        close={handleModalClose}
        // bgcolor={Colors.hover}
        title={<Grid container style={{backgroundColor:Colors.hover,justifyContent:"center",padding:20}}><Typography style={{fontSize:24,color:"#fff"}}>{titlemodal}</Typography></Grid>}
        content={
          <div style={{ width: 500 }}>
            <Grid container>
            <Typography>Apakah Anda Yakin menghapus user dengan nama : {name}</Typography>
            </Grid>
            <Grid container style={{ marginTop: 10, marginBottom: 20 }}>
              <Button className={classes.closeBtn} onClick={handleModalClose}>
                <Typography className={classes.txtAction2}>Batal</Typography>
              </Button>
              <Button className={classes.makeOrderBtn} onClick={handleSubmit}>
                <Typography className={classes.txtAction}>Hapus</Typography>
              </Button>
            </Grid>
          </div>
        }
      />
    </div>
  )
}


export default withRouter(Home);