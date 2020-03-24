import React, { useState,useEffect,useRef }  from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    filterCls: {
        backgroundColor: '#b3b3b3'
      },
  }),
);
const Filter = (props:any) => {
    const [open,setOpen] = useState(false);
    const [disableCategory, setDisableCategory]= useState(false);
    const [disableCountry, setDisableCountry]= useState(false);
    const [endpoints,setEndpoints] = useState('Select');
    const [country,setCountry] = useState('Select');
    const [category,setCategory] = useState('Select');
    const [qFiled, setQField] = useState('');
    const [pageSize, setPageSizeValue] = useState('');
  const classes = useStyles();
  const handleClickOpen = () => {
    setEndpoints('Select');
    setCountry('Select');
    setCategory('Select');
    setQField('');
    setPageSizeValue("20");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEndpointChange = (event: any) => {
      if(event.target.value === "/v2/sources" || event.target.value ==="/v2/everything"){
        if(event.target.value === "/v2/sources"){
          setDisableCategory(true);
          setCategory("Select");
        }else{
          setCountry("Select");
          setCategory("Select");
          setDisableCategory(true);
          setDisableCountry(true);
        }
      }else{
        setDisableCountry(false);
        setDisableCategory(false);
      }
    setEndpoints(event.target.value as string);
  };
   const handleCountryChange = (event: any) => {
    setCountry(event.target.value as string);
  };
const handleCategoryChange = (event: any) => {
  setCategory(event.target.value as string);
};

const validatePageInput =(event:any) => {
  if(event.target.value<20 || event.target.value>100){
    if(event.target.value<20){
      event.target.value = 20;
    }else{
      event.target.value = 100;
    }
}
}

const handleFilterData = () => {
  let newsServiceUrl = "https://newsapi.org";
  if(endpoints && endpoints!== "Select"){
    newsServiceUrl = newsServiceUrl+endpoints+"?";
    console.log("endpoints && ::"+newsServiceUrl)
  }
  if(endpoints!="/v2/Sources"){
  if(qFiled!==undefined && qFiled.trim()!==''){
    newsServiceUrl = newsServiceUrl+"q="+qFiled+"&";
    console.log("qFiled && ::"+newsServiceUrl)
  }
  }
  if(country && country!== "Select"){
    newsServiceUrl = newsServiceUrl+"country="+country+"&";
    console.log("country && ::"+newsServiceUrl)
  }
  if(category && category!== "Select"){
    newsServiceUrl = newsServiceUrl+"category="+category+"&";
    console.log("category && ::"+newsServiceUrl)
  }

 // newsServiceUrl = newsServiceUrl+"apiKey=7b95fa856336437295a0ee3d0a53fd69";  1fc0a77bf2bd494db21842f0a66d75bb
 newsServiceUrl = newsServiceUrl+"apiKey=1fc0a77bf2bd494db21842f0a66d75bb"; 
 console.log("url after api key  ::"+newsServiceUrl)
  if(pageSize){
    newsServiceUrl = newsServiceUrl + "&pagesize="+pageSize;
    console.log("url after api key  & pageSize ::"+newsServiceUrl)
  }
props.updateServiceUrl(newsServiceUrl);
props.updatePageSize(pageSize);
handleClose();
}
const handleQfieldValue = (event: any) => {
  setQField(event.target.value as string)
};

const handlepageSizeValue = (event: any) => {
  setPageSizeValue(event.target.value as string)
};

  const [labelWidth, setLabelWidth] = useState(0);
    return (<div className={classes.filterCls}>
    <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Apply Filter
      </Button>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Apply filter for specific News"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <FormControl variant="outlined" className={classes.formControl}>
         <label>Endpoints :</label>
          <Select
            labelId="demo-simple-select-outlined-label1"
            id="demo-simple-select-outlined1"
            value={endpoints}
            onChange={handleEndpointChange}  labelWidth={labelWidth}>
            <MenuItem  value={"Select"}>Select
            </MenuItem>
            <MenuItem value={"/v2/top-headlines"}>Top Headlines</MenuItem>
            <MenuItem value={"/v2/everything"}>Everything</MenuItem>
            <MenuItem value={"/v2/sources"}>Sources</MenuItem>
          </Select>
        </FormControl>
        <br/>
        <FormControl variant="outlined" className={classes.formControl}>
         <label>Country :</label>
          <Select
            labelId="demo-simple-select-outlined-label2"
            id="demo-simple-select-outlined2"
            value={country}
            disabled={disableCountry}
            onChange={handleCountryChange}  labelWidth={labelWidth}>
            <MenuItem  value={"Select"}>Select
            </MenuItem>
            <MenuItem value={"ae"}>ae</MenuItem>
            <MenuItem value={"ar"}>ar</MenuItem>
            <MenuItem value={"at"}>at</MenuItem>
            <MenuItem value={"au"}>au</MenuItem>
            <MenuItem value={"be"}>be</MenuItem>
            <MenuItem value={"bg"}>bg</MenuItem>
            <MenuItem value={"br"}>br</MenuItem>
            <MenuItem value={"ca"}>ca</MenuItem>
            <MenuItem value={"ch"}>ch</MenuItem>
            <MenuItem value={"cn"}>cn</MenuItem>
            <MenuItem value={"co"}>co</MenuItem>
            <MenuItem value={"cu"}>cu</MenuItem>
            <MenuItem value={"cz"}>cz</MenuItem>
            <MenuItem value={"de"}>de</MenuItem>
            <MenuItem value={"eg"}>eg</MenuItem>
            <MenuItem value={"fr"}>fr</MenuItem>
            <MenuItem value={"gb"}>gb</MenuItem>
            <MenuItem value={"gr"}>gr</MenuItem>
            <MenuItem value={"hk"}>hk</MenuItem>
            <MenuItem value={"hu"}>hu</MenuItem>
            <MenuItem value={"id"}>id</MenuItem>
            <MenuItem value={"ie"}>ie</MenuItem>
            <MenuItem value={"il"}>il</MenuItem>
            <MenuItem value={"in"}>in</MenuItem>
            <MenuItem value={"it"}>it</MenuItem>
            <MenuItem value={"jp"}>jp</MenuItem>
            <MenuItem value={"kr"}>kr</MenuItem>     
            <MenuItem value={"lt"}>lt</MenuItem>
            <MenuItem value={"lv"}>lv</MenuItem>   
            <MenuItem value={"ma"}>ma</MenuItem>
            <MenuItem value={"mx"}>mx</MenuItem>
            <MenuItem value={"my"}>my</MenuItem>
            <MenuItem value={"ng"}>ng</MenuItem>   
            <MenuItem value={"nl"}>nl</MenuItem>
            <MenuItem value={"no"}>no</MenuItem>
            <MenuItem value={"nz"}>nz</MenuItem>   
            <MenuItem value={"ph"}>ph</MenuItem>
            <MenuItem value={"pl"}>pl</MenuItem>
            <MenuItem value={"pt"}>pt</MenuItem>  
            <MenuItem value={"ro"}>ro</MenuItem>
            <MenuItem value={"rs"}>rs</MenuItem>
            <MenuItem value={"ru"}>ru</MenuItem>  
            <MenuItem value={"sa"}>sa</MenuItem>
            <MenuItem value={"se"}>se</MenuItem>  
            <MenuItem value={"sg"}>sg</MenuItem>
            <MenuItem value={"si"}>si</MenuItem>
            <MenuItem value={"sk"}>sk</MenuItem> 
            <MenuItem value={"th"}>th</MenuItem>
            <MenuItem value={"tr"}>tr</MenuItem>  
            <MenuItem value={"tw"}>tw</MenuItem>
            <MenuItem value={"ua"}>ua</MenuItem>
            <MenuItem value={"us"}>us</MenuItem> 
            <MenuItem value={"ve"}>ve</MenuItem>
            <MenuItem value={"za"}>za</MenuItem> 
          </Select>
        </FormControl>
        <br/>
        <FormControl variant="outlined" className={classes.formControl}>
         <label>Category :</label>
          <Select
            labelId="demo-simple-select-outlined-label3"
            id="demo-simple-select-outlined3"
            value={category}
            disabled={disableCategory}
            onChange={handleCategoryChange}  labelWidth={labelWidth}>
            <MenuItem  value={"Select"}>Select
            </MenuItem>
            <MenuItem value={"business"}>Business</MenuItem>
            <MenuItem value={"entertainment"}>Entertainment</MenuItem>
            <MenuItem value={"general"}>General</MenuItem>
            <MenuItem value={"health"}>Health</MenuItem>
            <MenuItem value={"science"}>Science</MenuItem>
            <MenuItem value={"sports"}>Sports</MenuItem>
            <MenuItem value={"technology"}>Technology</MenuItem>
          </Select>
        </FormControl>
        <br/><br/>
        <FormControl>
        <label>q :</label>
        <TextField id="qField" variant="outlined" onChange={handleQfieldValue} />
        </FormControl>
        <br/><br/>
        <FormControl>
        <label>Page Size :</label>
        <TextField id="pageSizeField" type="number"
        variant="outlined" defaultValue = "20"
        onBlur={validatePageInput}
        onChange={handlepageSizeValue}
        inputProps={{min:"20",max:"100",step:"1"}}/>
        </FormControl>
        <br/>
        {/* <FormControl>
        <label>Page :</label>
        <TextField id="pageField" variant="outlined" />
        </FormControl> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id ="filterBtn" variant="contained" onClick={handleFilterData} color="primary" autoFocus>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>);
}

export default Filter;