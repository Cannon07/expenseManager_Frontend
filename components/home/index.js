import { Card, Text, Grid, Button } from "@nextui-org/react";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
import { Bar, Line } from "react-chartjs-2";

const HomeComp = (props) => {
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [incomeAmount, setIncomeAmount] = useState(0);
    console.log(props);
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
        );

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Expense Dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'Income Dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [60, 29, 30, 71, 56, 15, 90]
          }
        ]
      };

    useEffect (() => {
        let newExpenseAmount = 0, newIncomeAmount = 0;
        for (let i=0; i<props.transData.length; i++) {
            if (props.transData[i]['transactionTypeId'] == 1) {
                newExpenseAmount = newExpenseAmount + props.transData[i]['amount']
            }
            else if (props.transData[i]['transactionTypeId'] == 2) {
                newIncomeAmount = newIncomeAmount + props.transData[i]['amount']
            }
        }
        setExpenseAmount(newExpenseAmount)
        setIncomeAmount(newIncomeAmount)
    }, []);

    return (
        <div>
            <Grid.Container gap={2}>
                <Grid xs={4}>
                    <Card className={styles.amountCard} variant="flat">
                      <Card.Body>
                        <Text>Total Expense</Text>
                        <Text h1>{expenseAmount}</Text>
                      </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card className={styles.amountCard} variant="flat">
                      <Card.Body>
                        <Text>Total Income</Text>
                        <Text h1>{incomeAmount}</Text>
                      </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
                <Grid xs={4}>
                    <Card className={styles.categoryCard} variant="flat">
                        <Card.Header>
                            <Text>Expense By Category</Text>
                        </Card.Header>
                        <Card.Divider className={styles.divider} />
                        <Card.Body className={styles.categoryName}>
                            {props.catData.map((cat) => {
                                return (
                                    <Button size="sm" key={cat['id']} light className={styles.categoryText}>
                                        {cat['name']}
                                    </Button>
                                );
                            })} 
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={8}>
                    <Card className={styles.amountCard} variant="flat">
                      <Card.Body>
                        <Line
                          data={data}
                          width={500}
                          height={200}
                        />
                      </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </div>
    );
}

export default HomeComp;