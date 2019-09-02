import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import style from '../style/basic.css';
import tableStyle from '../style/table.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const PostLink = props => ( //dynamic pages
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}> 
        <a>{props.id}</a> 
      </Link>
    </li>
); //pass data as query string parameter



export default function Home(){
    return(
        <div>
            <Layout>
            <style>
                @import url('https://fonts.googleapis.com/css?family=Rock+Salt&display=swap');
            </style>
            <h1>Planner</h1>
                <Table>
                    <Thead>
                        <Tr>
                            <Th id='head'></Th>
                            <Th>Breakfast</Th>
                            <Th>Snack 1</Th>
                            <Th>Lunch</Th>
                            <Th>Snack 2</Th>
                            <Th>Dinner</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td id='days'>Monday</Td>
                            <Td>Some really big text to cover the whole cell with it</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td id='days'>Tuesday</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>Wednesday</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>Thursday</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>Friday</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>Saturday</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td>Sunday</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            
            <ul>
                <PostLink id="Breakfast" />
                <PostLink id="Lunch" />
                <PostLink id="Snack" />
                <PostLink id="Dinner" />
            </ul>
            </Layout>
        </div>
    );
}

