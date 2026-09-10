import { Link } from "react-router-dom";

const books=[
    {
        id:1,
        title:"सकारात्मक_सोच_की_शक्ति_नॉर्मन_व्हिन्सेंट",
        Image:"/public/Images/Baiography/sakaratmaksoachkishakti-F.webp",
        Link:"https://drive.google.com/file/d/10wYzO38Tveq3mg1TZ3qzyR1szt2RUz4V/view?usp=drive_link"
    },
    
    {
        id:2,
        title:"राम मनोहर लोहिया का जीवन परिचय ",
        Image:"/public/Images/Baiography/81Sy1ERhdsL._SL1500_.jpg",
        Link:"https://drive.google.com/file/d/1RbAj0snfQXa0DXQu294nO9JKPnJLRj6W/view?usp=drive_link"
    }
,
    {
        id:3,
        title:"रबीन्द्रनाथ टैगोर का जीवन परिचय ",
        Image:"/public/Images/Baiography/71iYDaFQ8JL._SL1500_.jpg",
        Link:"https://drive.google.com/file/d/1_SXSwISerJ1vLGm5dIlhXBUs6Q5GVCNL/view?usp=drive_link"
    }

,    {
        id:4,
        title:"नरेन्द्र मोदी का जीवन परिचय _",
        Image:"/public/Images/Baiography/A1yTQ7y2lvL.jpg",
        Link:"https://drive.google.com/file/d/1KmXWdV_lCiQPH5VbUfphB1pZus-9A8lE/view?usp=drive_link"
    }
    ,
    {
        id:5,
        title:"जिद करो दुनिया बदलो",
        Image:"/public/Images/Baiography/OIP1111.jpg",
        Link:"https://drive.google.com/file/d/18Jvfm_Y4KD-WFO776S9gzIrwNjPM-SNe/view?usp=drive_link"
    },

    {
        id:6,
        title:"virat-brahm-ki-jharokhe",
        Image:"/public/Images/Baiography/OIP.jpg",
        Link:"https://drive.google.com/file/d/1yrq3skuHxh35bZKUa3JGIecR20_47Esg/view?usp=drive_link"
    },
    {
        id:7,
        title:"the-Power-of-your-Subconscious",
        Image:"/public/Images/Baiography/download.jpg",
        Link:"https://drive.google.com/file/d/1rJmykMa4q6nOehKwZ9Aaa7GWKOG4ePwa/view?usp=drive_link"
    }
    ,


    {
        id:8,
        title:"The Power Of Now (Hindi)",
        Image:"/public/Images/Baiography/OIP1.jpg",
        Link:"https://drive.google.com/file/d/1v3I8YSSv25HmwmRU2CEbZNg5REpQj4DT/view?usp=drive_link"
    },
    {
        id:9,
        title:"The Master Key To Riches (Hindi)",
        Image:"/public/Images/Baiography/OIP3.jpg",
        Link:"https://drive.google.com/file/d/18f_3frZagi9Taeb30GlVdnsaexuoUTWp/view?usp=drive_link"
    },
    {
        id:10,
        title:"The Law Of Attraction (Hindi)",
        Image:"/public/Images/Baiography/OIP12.jpg",
        Link:"https://drive.google.com/file/d/1CHdzJgKt0YNYDgI3IlPrFQOKj1LCC23m/view?usp=drive_linkhttps://drive.google.com/file/d/18Jvfm_Y4KD-WFO776S9gzIrwNjPM-SNe/view?usp=drive_link"
    },

    {
        id:11,
        title:"SURENDRA NEGIJI-Santon",
        Image:"/public/Images/Baiography/OIP13.jpg",
        Link:"https://drive.google.com/file/d/1sZfGXC7p2ws1M_xMQGXQjErhPV5cUS4m/view?usp=drive_linkhttps://drive.google.com/file/d/18Jvfm_Y4KD-WFO776S9gzIrwNjPM-SNe/view?usp=drive_link"
    }
    
    
    ,

    {
        id:12,
        title:"Siddhidayak_Sadhanae_Parikshan_V_Prayog book",
        Image:"/public/Images/Baiography/OIP4.jpg",
        Link:"https://drive.google.com/file/d/1vaBaL6ef-nXEmb1ytykgA1_tkwjN-Ydi/view?usp=drive_link"
    },
    ,

    {
        id:13,
        title:"Read - Biography IQ (2)",
        Image:"/public/Images/Baiography/download1.jpg",
        Link:"https://drive.google.com/file/d/1g_kdkXbFotHO2hMn2HVIDotXrB7IhsbG/view?usp=drive_link"
    },
    ,

    {
        id:14,
        title:"Read - Biography IQ (1)",
        Image:"/public/Images/Baiography/OIP5.jpg",
        Link:"https://drive.google.com/file/d/14wzESBEWLhN1030HK7ShKxuvoCGCOCTp/view?usp=drive_link"
    },
    ,

    {
        id:15,
        title:"PRADEEPJI-Mcdonalds Success Story (Hindi",
        Image:"/public/Images/Baiography/OIP6.jpg",
        Link:"https://drive.google.com/file/d/1gfHG_uskHPYCUduJRtMn4ZBSxuhKLrF2/view?usp=drive_link"
    },
    ,

    {
        id:16,
        title:"power-subconscious-mind",
        Image:"/public/Images/Baiography/OIP7.jpg",
        Link:"https://drive.google.com/file/d/1H2TpXcqxT2S0mMKDCt29T2B3J-v2YJEr/view?usp=drive_link"
    },
    ,

    {
        id:17,
        title:"nirbhay-bane-shaant-rahen",
        Image:"/public/Images/Baiography/OIP8.jpg",
        Link:"https://drive.google.com/file/d/1RgP2cFfhH1gelk-P-DuWpJs62VbKdrR1/view?usp=drive_link"
    },
    ,

    {
        id:18,
        title:"niraasha-ko-paas-na-phatakne-",
        Image:"/public/Images/Baiography/OIP9.jpg",
        Link:"https://drive.google.com/file/d/1C7Ygr2q-vs6cnTYi5zEgxIRL2jdm_06r/view?usp=drive_link"
    },
    ,

    {
        id:19,
        title:"Lessons For 21st Century (Hindi)",
        Image:"/public/Images/Baiography/OIP11.jpg",
        Link:"https://drive.google.com/file/d/1a1u0wf4ioS_GB5wRBX4F3sXj0t-G15ee/view?usp=drive_link"
    },
    ,

    {
        id:20,
        title:"KODAK - H",
        Image:"/public/Images/Baiography/OIP14.jpg",
        Link:"https://drive.google.com/file/d/1_HAeTqt2OoZF53XtvnGdUtTxf_Hc6vqm/view?usp=drive_link"
    },
    ,

    {
        id:21,
        title:"jeet_aapk",
        Image:"/public/Images/Baiography/OIP16.jpg",
        Link:"https://drive.google.com/file/d/1opASECGTQ6XsMeaqWLBtZVAwyMha6JrE/view?usp=drive_link"
    },
    ,

    {
        id:22,
        title:"How to talk to anyone hindi ",
        Image:"/public/Images/Baiography/download3.jpg",
        Link:"https://drive.google.com/file/d/1zzC-YrYxve8EUKf70XsqBxfS0-7le6Oo/view?usp=drive_link"
    },
    ,

    {
        id:23,
        title:"Garib Das ji Ki Bani",
        Image:"/public/Images/Baiography/OIP17.jpg",
        Link:"https://drive.google.com/file/d/1R0vJhmuwwYulTipr3gMkua4ZbgJNR7GD/view?usp=drive_link"
    },
    ,

    {
        id:24,
        title:"Galilio- H",
        Image:"/public/Images/Baiography/download4.jpg",
        Link:"https://drive.google.com/file/d/1cBSeVaGIkeKpdyGKQOhoM5De8mRIXcEF/view?usp=drive_link"
    },
    ,

    {
        id:25,
        title:"Everest ki Beti (Hindi Edition)",
        Image:"/public/Images/Baiography/OIP18.jpg",
        Link:"https://drive.google.com/file/d/1rrTO109Jjvg0VjR3IG7v4CXa1bNZbmPz/view?usp=drive_link"
    },
    ,

    {
        id:26,
        title:"coding-ke-shikhar-par",
        Image:"/public/Images/Baiography/OIP19.jpg",
        Link:"https://drive.google.com/file/d/18EW0SqKYKwNwvv5Bai-H6287Yx_Orx1M/view?usp=drive_link"
    },




]

export default books