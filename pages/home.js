import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import style from '../style/basic.css';
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
                <Table id='table'>
                    <Thead id='headings'>
                        <Tr>
                            <Th></Th>
                            <Th>Monday</Th>
                            <Th>Tuesday</Th>
                            <Th>Wednesday</Th>
                            <Th>Thursday</Th>
                            <Th>Friday</Th>
                            <Th>Saturday</Th>
                            <Th>Sunday</Th>
                        </Tr>
                    </Thead>
                    <Tbody id='meal'>
                        <Tr>
                            <Td id='headings'>Breakfast</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td id='headings'>Snack 1</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td id='headings'>Lunch</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td id='headings'>Snack 2</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                        <Tr>
                            <Td id='headings'>Dinner</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                            <Td>{}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            <h1>Planner</h1>
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

