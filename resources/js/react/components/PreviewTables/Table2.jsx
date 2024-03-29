import React, { useState, useEffect } from 'react'
import {Card, IndexTable, Icon, Stack, Text} from '@shopify/polaris';
import {
    MobileMajor, DesktopMajor, CircleTickMinor, CircleCancelMinor,
} from '@shopify/polaris-icons';
import logo from "./images/logo.png";


export function Table2({ yourBrand, competitorName, advantageLoading, allValues,footerStatus,
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
        singular: 'theme2',
        plural: 'themes2',
    };


    // const themeRowsPc = [...Array(Number(advantagesCount))]?.map(
    //     (item1, index1) => {
    //         return (
    //             <IndexTable.Row
    //                 id={index1}
    //                 key={index1}
    //                 position={index1}
    //             >
    //                 <IndexTable.Cell>
    //                     <div style={{ color: `${advantageColorValues[index1]}` }}>
    //                         {allValues[index1]}
    //                     </div>
    //                 </IndexTable.Cell>
    //                 <IndexTable.Cell >
    //                     {brandValue[index1] ?
    //                         <span style={{ fill: `${colorValues.brand_checkbox_color1}` }}>
    //                             <Icon source={CircleTickMinor}></Icon>
    //                         </span>
    //                         :
    //                         <span style={{ fill: `${colorValues.brand_checkbox_color2}` }} >
    //                             <Icon source={CircleCancelMinor}></Icon>
    //                         </span>
    //                     }
    //                 </IndexTable.Cell>
    //                 {[...Array(Number(competitorsCount))]?.map((item2, index2) => (
    //                     <IndexTable.Cell>
    //                         {competitorValue[index1] && competitorValue[index1][index2] ?
    //                             <span style={{ fill: `${colorValues.competitors_checkbox_color1}` }}>
    //                                 <Icon source={CircleTickMinor}></Icon>
    //                             </span> :
    //                             <span style={{ fill: `${colorValues.competitors_checkbox_color2}` }}>
    //                                 <Icon source={CircleCancelMinor}></Icon>
    //                             </span>
    //                         }
    //                     </IndexTable.Cell>
    //                 ))}
    //             </IndexTable.Row>
    //         )
    //     });



    const themeRowsPc = [...Array(Number(advantagesCount))]?.map(
        (item1, index1) => {
            return (
                <IndexTable.Row
                    id={index1}
                    key={index1}
                    position={index1}
                >
                    <IndexTable.Cell>
                        <div style={{ color: `${colorValues?.text_advantages_color}` }} >
                            {allValues[index1]}
                        </div>
                    </IndexTable.Cell>

                    <IndexTable.Cell >
                        {brandValue[index1] ?
                            <span style={{ fill: `${colorValues.brand_checkbox_color1}` }} >
                                <Icon source={CircleTickMinor}></Icon>
                            </span>
                            :
                            <span style={{ fill: `${colorValues.brand_checkbox_color2}` }} >
                                <Icon source={CircleCancelMinor}></Icon>
                            </span>
                        }
                    </IndexTable.Cell>

                    {[...Array(Number(competitorsCount))]?.map((item2, index2) => (
                        <IndexTable.Cell>
                            {competitorValue[index1] && competitorValue[index1][index2] ?
                                <span style={{ fill: `${colorValues.competitors_checkbox_color1}` }} >
                                    <Icon source={CircleTickMinor}></Icon>
                                </span> :
                                <span style={{ fill: `${colorValues.competitors_checkbox_color2}` }} >
                                    <Icon source={CircleCancelMinor}></Icon>
                                </span>
                            }
                        </IndexTable.Cell>
                    ))}
                </IndexTable.Row>


            )
        });


    // const themeRowsMobile = [...Array(Number(competitorsCount) + 1)]?.map(
    //     (item1, index1) => {
    //         return (
    //             <>
    //                 {index1 === 0 ?
    //                     <IndexTable.Row
    //                         id={index1}
    //                         key={index1}
    //                         position={index1}
    //                     >
    //                         <IndexTable.Cell>
    //                             <span>{yourBrand}</span>
    //                         </IndexTable.Cell>

    //                         {[...Array(Number(advantagesCount))]?.map(
    //                             (item2, index2) => {
    //                                 return (
    //                                     <IndexTable.Cell>
    //                                         {brandValue[index2] ?
    //                                             <span style={{ fill: `${colorValues.brand_checkbox_color1}` }}>
    //                                                 <Icon source={CircleTickMinor}></Icon>
    //                                             </span>
    //                                             :
    //                                             <span style={{ fill: `${colorValues.brand_checkbox_color2}` }} >
    //                                                 <Icon source={CircleCancelMinor}></Icon>
    //                                             </span>
    //                                         }
    //                                     </IndexTable.Cell>
    //                                 )
    //                             })}

    //                     </IndexTable.Row> :

    //                     <IndexTable.Row
    //                         id={index1}
    //                         key={index1}
    //                         position={index1}
    //                     >
    //                         <IndexTable.Cell>
    //                             <span>{competitorName[index1 - 1]}</span>
    //                         </IndexTable.Cell>

    //                         {[...Array(Number(advantagesCount))]?.map(
    //                             (item3, index3) => {
    //                                 return (
    //                                     <IndexTable.Cell>
    //                                         {competitorValue[index3] && competitorValue[index3][index1 - 1] ?
    //                                             <span style={{ fill: `${colorValues.competitors_checkbox_color1}` }}>
    //                                                 <Icon source={CircleTickMinor}></Icon>
    //                                             </span>
    //                                             :
    //                                             <span style={{ fill: `${colorValues.competitors_checkbox_color2}` }} >
    //                                                 <Icon source={CircleCancelMinor}></Icon>
    //                                             </span>
    //                                         }
    //                                     </IndexTable.Cell>
    //                                 )
    //                             })}

    //                     </IndexTable.Row>
    //                 }
    //             </>
    //         )
    //     });


    const themeHeadingsPc = [];
    themeHeadingsPc.push({ title: '' }),
        themeHeadingsPc.push({ title: `${yourBrand}` }),
        [...Array(Number(competitorsCount))].map((item, index) => (
            themeHeadingsPc.push({ title: `${competitorName[index]}` })
        ))


    // const themeHeadingsMobile = [];
    // themeHeadingsMobile.push({ title: '' }),
    //     [...Array(Number(advantagesCount))].map((item, index) => (
    //         themeHeadingsMobile.push({ title: `${allValues[index]}` })
    //     ))



    return (
        <>

            {!advantageLoading &&

                <div className='Theme-Card-Content'>
                    <div className={`${'Theme2-Pc-Table'} Theme-Table`}>
                        <IndexTable
                            resourceName={resourceName}
                            itemCount={advantagesCount?.length}
                            selectable={false}
                            headings={themeHeadingsPc}
                        >
                            {themeRowsPc}
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
