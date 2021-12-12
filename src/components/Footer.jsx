function Footer() {
    return (
        <footer className='page-footer blue lighten-3'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getUTCFullYear()} Copyright Text
                    <a className='grey-text text-lighten-4 right' href='#!'>
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
