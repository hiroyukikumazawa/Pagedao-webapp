import React, { useEffect } from 'react'

import styles from './PdfModal.module.css'

const PdfModal = (props) => {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "/dflip/js/dflip.min.js"
        script.async = true

        document.body.appendChild(script)
    }, [])

    const height = props.modal ? { height: '552px !important' } : { height: 'calc(100vh - 120px) !important', width: '100% !important'}

    return (
        <div className={styles.pdf}>
            <div className="_df_book" webgl="true" backgroundcolor="#C1C1C1" minwidth="100%"
                source={props.data.url} >
            </div>
        </div>
    )
}

export default PdfModal