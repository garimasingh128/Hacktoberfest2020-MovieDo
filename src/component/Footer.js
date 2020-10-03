// @flow
import React from 'react';

import './footer.css';

const footer = () => {
	return (
		<footer
			id="footer"
			className="text-center d-flex align-items-center justify-content-center"
			style={{ height: '8vh', backgroundColor: '#1d1d1d' }}
		>
			<p className="bottom-bar lead font-weight-bold text-white m-0">
				With <span syle={{color: "red"}}>❤</span> by{' '}
				<a className="lead font-weight-bold" href="http://garimasingh.me">
					garimasingh.me
				</a>
			</p>
		</footer>
	);
};

export default footer;
