import React from 'react';

export default function GiftVoucher({
    companyName = "Company Name",
    voucherNumber = "1234 567 890",
    discountPercentage = 50,
    validUntil = "31/12/2024",
    contactPhone = "+01 234 567",
    contactEmail = "company@email.com",
}) {
    // Inline styles as JavaScript objects
    const styles = {
        container: {
            maxWidth: '900px',
            margin: '20px auto',
            padding: '16px',
        },
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            background: '#fff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        },
        wrapperRow: {
            flexDirection: 'row',
        },
        left: {
            flex: 1,
            padding: '40px',
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
        },
        logoBox: {
            width: '48px',
            height: '48px',
            border: '2px solid #e5e5e5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        logoText: {
            fontSize: '10px',
            color: '#888',
        },
        companyName: {
            fontSize: '18px',
            color: '#444',
            fontWeight: '500',
        },
        details: {
            marginTop: '16px',
        },
        title: {
            fontSize: '32px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #3b82f6, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px',
        },
        number: {
            fontSize: '16px',
            color: '#666',
        },
        contact: {
            marginTop: '16px',
            fontSize: '14px',
            color: '#888',
        },
        right: {
            background: 'linear-gradient(to right, #3b82f6, #9333ea)',
            color: '#fff',
            textAlign: 'center',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        discountTitle: {
            fontSize: '20px',
            marginBottom: '16px',
        },
        discountValue: {
            fontSize: '64px',
            fontWeight: 'bold',
            marginBottom: '16px',
        },
        validity: {
            fontSize: '14px',
            opacity: '0.9',
        },
    };

    return (
        <div style={styles.container}>
            <div style={{ ...styles.wrapper, ...(window.innerWidth >= 768 && styles.wrapperRow) }}>
                {/* Left Section */}
                <div style={styles.left}>
                    <div style={styles.header}>
                        <div style={styles.logoBox}>
                            <span style={styles.logoText}>YOUR LOGO</span>
                        </div>
                        <h2 style={styles.companyName}>{companyName}</h2>
                    </div>
                    <div style={styles.details}>
                        <div>
                            <h1 style={styles.title}>GIFT VOUCHER</h1>
                            <p style={styles.number}>No. {voucherNumber}</p>
                        </div>
                        <div style={styles.contact}>
                            {contactPhone && <p>{contactPhone}</p>}
                            {contactEmail && <p>{contactEmail}</p>}
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div style={styles.right}>
                    <div>
                        <h3 style={styles.discountTitle}>DISCOUNT</h3>
                        <div style={styles.discountValue}>{discountPercentage}%</div>
                        <p style={styles.validity}>Valid Until: {validUntil}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
