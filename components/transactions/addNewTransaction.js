import { Row } from "@nextui-org/react"
import { useState, useMemo } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./transactions.module.css";
import { Input, Dropdown, css } from "@nextui-org/react";
import { Textarea  } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { GetTransactions } from "../constants/urls";

export const AddNewTransaction = (props) => {
    const [selectedCat, setSelectedCat] = useState(new Set(["Choose a category"]));
    const [transactionName, setTransactionName] = useState("");
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionDescription, setTransactionDescription] = useState("");

    const selectedValue = useMemo(
        () => Array.from(selectedCat).join(", ").replaceAll("_", " "),
        [selectedCat]
      );

    const dropdownStyle = {
        backgroundColor: '#2B2F31',
    }

    const inputStyle = {
        // color: '#$pink100',
        backgroundColor: 'white',
    }

    const getCurrentDate = () => {
        const currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth() + 1;
        let currentDay = currentDate.getDay();
        if (currentMonth < 10) {
            currentMonth = "0" + String(currentMonth);
        }
        if (currentDay < 10) {
            currentDay = "0" + String(currentDay);
        }
        let formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;
        console.log(formattedDate);
        return formattedDate;
    }

    const getCategoryIdFromCategory = (category) => {
        let categoryName = Array.from(category)[0];
        console.log(categoryName);
        for (let i=0; i<props.catData.length; i++) {
            if (categoryName === props.catData[i]['name']) {
                return(props.catData[i]['id']);
            }
        }
    }

    const handleTransaction = async () => {
        const transactionDate = getCurrentDate();
        const categoryId = getCategoryIdFromCategory(selectedCat);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "ARRAffinity=ab52746cee3d2041a0a4d964700673b28428853c105b7c164f6460eb8129960d; ARRAffinitySameSite=ab52746cee3d2041a0a4d964700673b28428853c105b7c164f6460eb8129960d");

        var raw = JSON.stringify({
            "name": `${transactionName}`,
            "description": `${transactionDescription}`,
            "amount": Number(transactionAmount),
            "date": `${transactionDate}`,
            "transactionTypeId": 1,
            "categoryId": categoryId,
        });

        console.log(raw);
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch(
            `${GetTransactions}`,
            requestOptions
        )

        let responseData = await response.json()
        console.log(responseData);
    }

    return (
        <div>
            <h1>Create a new Transaction</h1>
            <Row justify="center">
                <div className={styles.newTranContainer}>
                    {/* <div>
                        <p>Date</p>
                        <DatePicker className={styles.inputDate} selected={transDate} onChange={(date) => setTransDate(date)} />
                    </div> */}
                    <div>
                        <p>Name</p>
                        <Input 
                            // color="primary"
                            bordered
                            placeholder="Enter Name" 
                            css={inputStyle}
                            onChange={(event) => {
                                setTransactionName(event.target.value);
                            }}
                            value={transactionName}
                        />
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
                            onChange={(event) => {
                                setTransactionAmount(event.target.value)
                            }}
                        />
                    </div>
                    
                    <div>
                        <p>Description (Optional)</p>
                        <Textarea
                            placeholder="Enter Description"
                            onChange={(event) => {
                                setTransactionDescription(event.target.value)
                            }}
                        />
                    </div>
                    <div>
                    <Button color="success" auto onPress={handleTransaction}>
                        Add Transaction
                    </Button>
                    </div>
                </div>
            </Row>
        </div>
    )
}
