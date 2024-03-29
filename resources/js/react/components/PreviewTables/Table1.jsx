import React, { useState } from 'react'
import {Card, IndexTable, Icon, Stack, Text} from '@shopify/polaris';
import { TickMinor, CancelMinor, MobileMajor, DesktopMajor } from '@shopify/polaris-icons';
import logo from "./images/logo.png";

export function Table1({ yourBrand, competitorName, advantageLoading, allValues,footerStatus,
    competitorsCount, brandValue, competitorValue, advantagesCount, colorValues, btnShow }) {

    const [screen, setScreen] = useState(true)
    const handleScreenSelection = (val) => {
        if (val) {
            setScreen(true)
        }
        else {
            setScreen(false)
        }
    }

    const resourceName = {
        singular: 'theme1',
        plural: 'themes1',
    };

    const themeRowsPc = [...Array(Number(advantagesCount))]?.map(
        (item1, index1) => {
            return (
                <IndexTable.Row
                    id={index1}
                    key={index1}
                    position={index1}
                >
                    <IndexTable.Cell>
                        <div style={{ color: `${colorValues?.text_advantages_color}` }}>
                            {allValues[index1]}
                        </div>
                    </IndexTable.Cell>
                    <IndexTable.Cell >
                        {brandValue[index1] ?
                            <span style={{ fill: `${colorValues.brand_checkbox_color1}` }}>
                                <Icon source={TickMinor}></Icon>
                            </span>
                            :
                            <span style={{ fill: `${colorValues.brand_checkbox_color2}` }} >
                                <Icon source={CancelMinor}></Icon>
                            </span>
                        }
                    </IndexTable.Cell>
                    {[...Array(Number(competitorsCount))]?.map((item2, index2) => (
                        <IndexTable.Cell>
                            {competitorValue[index1] && competitorValue[index1][index2] ?
                                <span style={{ fill: `${colorValues.competitors_checkbox_color1}` }}>
                                    <Icon source={TickMinor}></Icon>
                                </span> :
                                <span style={{ fill: `${colorValues.competitors_checkbox_color2}` }}>
                                    <Icon source={CancelMinor}></Icon>
                                </span>
                            }
                        </IndexTable.Cell>
                    ))}
                </IndexTable.Row>
            )
        });


    const themeHeadingsPc = [];
    themeHeadingsPc.push({ title: '' }),
        themeHeadingsPc.push({ title: `${yourBrand}` }),
        [...Array(Number(competitorsCount))].map((item, index) => (
            themeHeadingsPc.push({ title: `${competitorName[index]}` })
        ))


    return (
        <>
            {!advantageLoading &&
                <div className='Theme-Card-Content'>
                    <div className={`${screen ? 'Theme1-Pc-Table' : 'Theme1-Mobile-Table'} Theme-Table`}>
                        <IndexTable
                            resourceName={resourceName}
                            itemCount={advantagesCount?.length}
                            selectable={false}
                            headings={screen ? themeHeadingsPc : themeHeadingsPc}
                        >
                            {screen ? themeRowsPc : themeRowsPc}
                            <IndexTable.Row>
                                <IndexTable.Cell>;</IndexTable.Cell>
                                <IndexTable.Cell>;</IndexTable.Cell>
                                {[...Array(Number(competitorsCount))].map((item, index) => (
                                    <IndexTable.Cell>;</IndexTable.Cell>
                                ))}

                            </IndexTable.Row>
                        </IndexTable>

                        {footerStatus &&
                            <span className="footer-text">
                                    <img className="footer-logo" alt="logo" src={logo}/>
                                   <Text variant="bodyMd" as="p" fontWeight="medium">
                               Powered by Us Vs Them
                              </Text>
                                </span>
                        }
                    </div>


                    <div className='Screen-Selection'>
                        {btnShow &&
                            <Stack>
                                <span></span>
                                <div className='Screen-Selection-Icons'>
                                    <span className={`Screen-Icon ${screen && 'selected'}`}
                                        onClick={() => handleScreenSelection(true)}>
                                        <Icon source={DesktopMajor} ></Icon>
                                    </span>

                                    <span className={`Screen-Icon ${!screen && 'selected'}`}
                                        onClick={() => handleScreenSelection(false)}>
                                        <Icon source={MobileMajor}></Icon>
                                    </span>
                                </div>
                                <span></span>
                            </Stack>
                        }
                    </div>


                </div>
            }
        </>
    )
}
