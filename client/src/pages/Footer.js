const styles = {
    footer: {
        position: "relative",
        left: 0,
        bottom: 0,
        padding: "10px",
        width: "100%",
        background: "DarkSlateBlue",
        color: "antiquewhite",
        textAlign: "center",
    },
  };

function Footer() {
    return (
        <div style={styles.footer}>
            <p>&copy; Brandon Espinosa, Brice Veyna, Jeffrey Zhang &amp; Zori Zulkhuu</p>
        </div>
    );
}

export default Footer;