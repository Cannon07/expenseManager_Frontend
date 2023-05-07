import styles from "./transactions.module.css";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { TransTable } from "./transTable";
import { AddNewTransaction } from "./addNewTransaction";
import { Container, Button } from "@nextui-org/react";
import { useState } from "react";
import { GetReport } from "./getReport";
const TransactionComp = (props) => {
  console.log(props);
  const [showTrans, setShowTrans] = useState(true);

  return (
    <Container>
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
        <TransTable transData={props.transData} catData={props.catData} />
      ) : (
        <AddNewTransaction catData={props.catData} />
      )}
      <GetReport />
    </Container>
  );
};

export default TransactionComp;
