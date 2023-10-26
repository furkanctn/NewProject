import React from "react";
import Categories from "./Categories";
import ProductList from "../Pages/ProductList";
import { Grid } from 'semantic-ui-react'
import { Route ,Routes } from "react-router-dom";
import ProdcutDetails from "../Pages/ProdcutDetails";
import CartDetail from "../Pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path ="/" Component={ProductList}/>
              <Route exact path ="/products" Component={ProductList}/>
              <Route path ="/products/:name" Component={ProdcutDetails}/>
              <Route path ="/cart" Component={CartDetail}/>
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

