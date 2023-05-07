import styles from "./transactions.module.css";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { TransTable } from "./transTable";
import { AddNewTransaction } from "./addNewTransaction";
import { Container, Button } from "@nextui-org/react";
import { useState } from "react";
import { GetReport } from "./getReport";
import NavBar from "../navbar";

const TransactionComp = (props) => {
  console.log(props);
  const [showTrans, setShowTrans] = useState(true);
  const [transactionData, setTransactionData] = useState(props.transData);

  return (
    <Container>
      <NavBar />
      <div className={styles.headerDiv}>
        <h1>Transactions</h1>
        <Button
          color="success"
          auto
          onClick={() => {
            setShowTrans(!showTrans);
          }}
        >
          + New Transaction
        </Button>
      </div>
      {showTrans ? (
        <TransTable 
          transData={transactionData} 
          catData={props.catData}
          setTransactionData={setTransactionData}
        />
      ) : (
        <AddNewTransaction  
          catData={props.catData} 
          transactionData={transactionData}
          setTransactionData={setTransactionData}
          showTrans={showTrans}
          setShowTrans={setShowTrans}
        />
      )}
      <GetReport />
    </Container>
  );
};

export default TransactionComp;
