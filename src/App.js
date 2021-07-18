import { useState } from "react";
import "./styles.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0.5
    },

    title: {
      marginRight: theme.spacing(2)
    }
  })
);

export default function App() {
  const intialPoll = [
    { title: "Shop in style", sub: "With this shop hompeage template" }
  ];
  const cartTable = [
    {
      // src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      // line1: " Fancy Product",
      // price: "$40.00 - $80.00"
    }
  ];

  const [poll, setPoll] = useState(intialPoll);
  const [table, setTable] = useState(cartTable);
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.root}
        position="static"
        color="default"
        style={{ boxShadow: "0px 0px 0px 0px " }}
      >
        <Toolbar>
          <a variant="h5" className={classes.title}>
            Start Bootstrap
          </a>
          <a1 variant="h6" className={classes.title}>
            Home
          </a1>
          <a2 variant="h6" className={classes.title}>
            About
          </a2>

          <a2 variant="h6" className={classes.title}>
            Shop
          </a2>
          <hr />
          <Button color="inherit">Cart</Button>
          <Badge badgeContent={0} showZero color="error"></Badge>
        </Toolbar>
      </AppBar>

      <div className="poll" />
      {poll.map((detail) => (
        <Vote title={detail.title} sub={detail.sub} Content={detail.Content} />
      ))}

      <div className="cartTable">
        <Content src="450×300" line1=" Fancy Product" price="$40.00 - $80.00" />

        <Content src="450×300" line1=" Special Item" price="$20.00 $18.00" />
        <Content src="450×300" line1=" Sale Item" price="$50.00 $25.00" />
        <Content src="450×300" line1=" Popular Item" price="$40.00" />
        <Content src="450×300" line1=" Sale Item" price="$50.00 $25.00" />
        <Content
          src="450×300"
          line1=" Fancy Product"
          price="$120.00 - $280.00"
          
        />
        <Content src="450×300" line1=" Special Item" price="$20.00 $18.00" />
      </div>
      <cart>
        <div
          className="box"
          style={{ backgroundColor: "rgb(31, 30, 30)", color: "whitesmoke" }}
        >
          <h4>Copyright © Your Website 2021</h4>
        </div>
      </cart>
    </div>
  );
}

function Vote(props) {
  console.log(props);
  return (
    <div
      className="App"
      style={{ backgroundColor: "rgb(31, 30, 30)", color: "whitesmoke" }}
    >
      <h1>{props.title}</h1>
      <h4>{props.sub}</h4>
      <h4>{props.Content}</h4>
      <div></div>
    </div>
  );
}

function Content(props) {
  return (
    <div
      className="container"
      style={{ backgroundColor: "whitesmoke", padding: "5px" }}
    >
      <div
        className="card"
        style={{ backgroundColor: "white", padding: "5px" }}
      >
        <p className="button">
          <h3 className="table"> {props.src}</h3>
        </p>

        <h3 className="line1"> {props.line1}</h3>

        <h5 className="price"> {props.price}</h5>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px"
          }}
        >
          <Button size="large" variant="contained" color="white">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
