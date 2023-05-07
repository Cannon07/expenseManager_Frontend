import { CatTable } from "./catTable";
import styles from "./categories.module.css";
import { AddNewCategory } from "./addNewCategory";
import { Container, Button } from "@nextui-org/react";
import { useState } from "react";
import NavBar from "../navbar";

const CategoryComp = (props) => {
  console.log(props);
  const [showCat, setShowCat] = useState(true);

  return (
    <>
      <NavBar />
      <Container>
        <div className={styles.headerDiv}>
          <h1>Categories</h1>
          <Button
            color="success"
            auto
            onClick={() => {
              setShowCat(!showCat);
            }}
          >
            + New Category
          </Button>
        </div>
        {showCat ? (
          <CatTable catData={props.catData} />
        ) : (
          <AddNewCategory catData={props.catData} />
        )}
      </Container>
    </>
  );
};

export default CategoryComp;
