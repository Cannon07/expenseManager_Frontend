import { Row } from "@nextui-org/react"
import { useState, useMemo } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./transactions.module.css";
import { Input, Dropdown, css } from "@nextui-org/react";
import { Textarea  } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

export const AddNewTransaction = (props) => {
    const [transDate, setTransDate] = useState(new Date());
    const [selectedCat, setSelectedCat] = useState(new Set(["Choose a category"]));

    const selectedValue = useMemo(
        () => Array.from(selectedCat).join(", ").replaceAll("_", " "),
        [selectedCat]
      );

    const dropdownStyle = {
        backgroundColor: '#2B2F31',
    }

    const inputStyle = {
        color: '#$pink100',
        backgroundColor: 'white',
    }

    const handleTransaction = () => {
        var raw = JSON.stringify({
            "name": "string",
            "description": "string",
            "amount": 2147483647,
            "date": "string",
            "transactionTypeId": 2147483647,
            "categoryId": 2147483647
          });
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
    }

    return (
        <div>
            <h1>Create a new Transaction</h1>
            <Row>
                <div className={styles.newTranContainer}>
                    <div>
                        <p>Date</p>
                        <DatePicker className={styles.inputDate} selected={transDate} onChange={(date) => setTransDate(date)} />
                    </div>
                    <div>
                        <p>Category</p>
                        <Dropdown>
                          <Dropdown.Button
                            solid
                            color='primary'
                          >
                            {selectedCat}
                          </Dropdown.Button>
                          <Dropdown.Menu 
                            aria-label="Static Actions"
                            color='primary'
                            css={dropdownStyle}
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedCat}
                            onSelectionChange={setSelectedCat}
                          >
                          {props.catData.map((cat) => {
                            return(
                                <Dropdown.Item color="primary" key={cat['name']}>{cat['name']}</Dropdown.Item>
                            )
                          })}
                          </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <p>Amount</p>
                        <Input 
                            // color="primary"
                            bordered
                            placeholder="Enter amount" 
                            css={inputStyle}
                        />
                    </div>
                    
                    <div>
                        <p>Description (Optional)</p>
                        <Textarea
                        placeholder="Enter Description"
                        />

                    </div>
                    <div>
                    {/* <Button color="success" auto onClick={}>
                        Add Transaction
                    </Button> */}
                    </div>
                </div>
            </Row>
        </div>
    )
}

