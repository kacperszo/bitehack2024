import {Box, Button, Grid, Stack, Tab, Tabs, Typography, useTheme} from "@mui/material";
import * as React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Layout from "@/components/layout";
import Article from "@/components/knowledgeBase/article";
import Input from '@mui/material/Input';

export default function KnowledgeBasePage() {
    const theme = useTheme();

    const InfoCard = ({children, sx}) => {
        const theme = useTheme();

        return (<Box sx={{
            backgroundColor: "#EFFDF3", padding: 1.5, m: 1, borderRadius: 2, ...sx
        }}>
            {children}
        </Box>)
    }

    const tags = ['Profilaktyka', 'Inspiracja', 'Zdrowie psychiczne']

    const popularArticles = [
        {title: 'Czym są endorfiny?', author: 'Katarzyna Kowalska', image: "article1.png"},
        {title: 'Jak przestać się martwić?', author: 'Jan Nowak', image: "article2.png"},
    ]

    return (
        <Layout>
            <Navbar/>
            <Box sx={{
                padding: 2,
                display: 'flex',
                flexDirection: {xs: 'column', lg: 'row'},
            }}>
                <Box>
                    <InfoCard>
                        <Box>
                            <Typography fontWeight={600} variant={"h6"} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '1.5rem'
                            }}>
                                <Image
                                    style={{paddingLeft: 0, paddingRight: 10,}}
                                    src={"/icons/Book.svg"} width={40} height={40}
                                    alt={"Book"}/>
                                Baza Wiedzy
                            </Typography>
                        </Box>
                    </InfoCard>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        whiteSpace: 'nowrap',
                        marginTop: 2
                    }} className={'without-x-scrollbar'}>
                        {tags.map((tag, index) => {
                            return (
                                <Box key={index} sx={{
                                    backgroundColor: {xs: "#EFFDF3", lg: "#D9EDDF"},
                                    px: 1.5,
                                    py: 1,
                                    m: 1,
                                    borderRadius: 2
                                }}>
                                    <Typography fontWeight={600} variant={"h6"} sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '1rem',
                                    }}>
                                        {tag}
                                    </Typography>
                                </Box>
                            )
                        })}
                    </Box>
                    <Box sx={{
                        m: 1
                    }}>
                        <Typography
                            sx={{
                                color: '#2B5B30',
                                fontWeight: 'bold',
                                fontSize: '1.25rem',
                                my: 2
                            }}>Popularne</Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'nowrap',
                            whiteSpace: 'nowrap',
                            gap: 2
                        }} className={'without-x-scrollbar'}>
                            {popularArticles.map((article, index) => {
                                return <Article article={article}/>
                            })}
                        </Box>
                    </Box>
                    <Box sx={{
                        m: 1
                    }}>
                        <Typography
                            sx={{
                                color: '#2B5B30',
                                fontWeight: 'bold',
                                fontSize: '1.25rem',
                                my: 2
                            }}>Najnowsze</Typography>
                        <Box sx={{
                            backgroundColor: {xs: "#EFFDF3", lg: "#D9EDDF"},
                            width: {xs: '100%', md: '50%'},
                            borderRadius: '15px'
                        }}>
                            <Box sx={{
                                position: 'relative',
                                width: '100%',
                                height: '220px',
                            }}>
                                <Image src={`/articles/article3.png`} alt={'Spokój - jak go osiągnąć'} layout={'fill'}
                                       objectFit={'cover'}
                                       style={{borderRadius: '15px 15px 0 0'}}/>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color: '#00350D',
                                    fontFamily: 'Poppins',
                                    fontWeight: 'bold',
                                    p: 1,
                                    pb: 1
                                }}>{'Spokój - jak go osiągnąć'}</Typography>
                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '0.75rem',
                                    p: 1,
                                    pt: 0
                                }}>{'Niektóre rzeczy w życiu są poza Twoją kontrolą. Zamiast się nimi martwić, spróbuj je zaakceptować i skupić się na tym, co możesz zmienić.'}</Typography>
                                <Typography sx={{
                                    color: '#2B5B30',
                                    fontFamily: 'Poppins',
                                    p: 1,
                                    pt: 0
                                }}>{'Anna wiśniowska'}</Typography>
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                color: '#2B5B30',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                my: 2,
                                textDecoration: 'underline',
                                width: {xs: '100%', md: '50%'}
                            }}>Zobacz Więcej</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <InfoCard>
                        <Box>
                            <Typography fontWeight={600} variant={"h6"} sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '1.5rem'
                            }}>
                                <Image
                                    style={{paddingLeft: 10, paddingRight: 10,}}
                                    src={"/icons/page.svg"} width={30} height={30}
                                    alt={"Chat"}/>
                                Chat
                            </Typography>
                        </Box>
                    </InfoCard>
                    <Box sx={{
                        backgroundColor: {xs: "#EFFDF3", lg: "#D9EDDF"},
                        px: 1.5, py: 1, pt: 3, m: 1, mt: 3,
                        borderRadius: 2,
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            flex: '1'
                        }}>
                            <Typography sx={{
                                textAlign: 'center',
                                fontSize: '2rem',
                                pb: 4,
                                fontWeight: 'bold',
                                fontFamily: 'Poppins'
                            }}>Maks</Typography>
                            <Box sx={{
                                position: 'relative',
                                width: '100%',
                                height: {xs: '130px', lg: '200px', xl: '250px'},
                                my: 3
                            }}><Image
                                src={'/undraw_artificial_intelligence.svg'} alt={'Maks'} layout={'fill'}
                                objectFit={'cover'}/></Box>
                            <Typography
                                sx={{fontFamily: 'Poppins', pt: 4, textAlign: 'center', fontSize: '1rem', pb: 4}}>Jeśli
                                masz
                                jakieś pytania na które nie znalazłeś odpowiedzi w artykułach służę pomocą</Typography>
                        </Box>
                        <Input sx={{
                            width: '100%',
                            borderRadius: '10px',
                            border: '1px solid #00350D',
                            backgroundColor: '#EFFDF3',
                            padding: {xs: '5px 10px', lg: '7px 15px'},
                            marginBottom: '5px',

                        }} type={'text'} placeholder={'Zadaj pytanie'}/>
                        <Button>Wyślij</Button>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}