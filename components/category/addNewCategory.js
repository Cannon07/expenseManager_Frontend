import { Row } from "@nextui-org/react"
import { useState, useMemo } from "react"
import "react-datepicker/dist/react-datepicker.css";
import styles from "./addNewCategory.module.css";
import { Input } from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { GetCategories } from "../constants/urls";

export const AddNewCategory = (props) => {
    const [categoryName, setCategoryName] = useState("");


    const inputStyle = {
        // color: '#$pink100',
        backgroundColor: 'white',
        width: '100%',
    }


    const addButtonStyle = {
        width: '50%',
    }

    const getCategoryIdFromCategory = () => {
        console.log(props.catData.length);
        return (props.catData.length+1)

    }

    const handleCategory = async () => {
        const categoryId = getCategoryIdFromCategory();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "ARRAffinity=ab52746cee3d2041a0a4d964700673b28428853c105b7c164f6460eb8129960d; ARRAffinitySameSite=ab52746cee3d2041a0a4d964700673b28428853c105b7c164f6460eb8129960d");

        var raw = JSON.stringify({
            "name": `${categoryName}`
        });

        console.log(raw);
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let response = await fetch(
            `${GetCategories}`,
            requestOptions
        )

        let responseData = await response.json()
        console.log(responseData);
    }

    return (
        <div className={styles.mainContainer}>
            <h1>Create a new Category</h1>
            <Row justify="center" className={styles.containerRow}>
                <div className={styles.newCatContainer}>
                    <div>
                        <p>Name</p>
                        <Input 
                            // color="primary"
                            bordered
                            placeholder="Enter Name" 
                            css={inputStyle}
                            onChange={(event) => {
                                setCategoryName(event.target.value);
                            }}
                            value={categoryName}
                        />
                    </div>
                    
                    <div className={styles.addButtonDiv}>
                        <Button 
                            color="success" 
                            auto 
                            onPress={handleCategory}
                            css={addButtonStyle}
                        >
                            Add Category
                        </Button>
                    </div>
                </div>
            </Row>
        </div>
    )
}

