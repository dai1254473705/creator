import React, { Component } from 'react';
interface InnerProps {
	url: string;
}
export default class WebView extends Component<InnerProps, any> {
	render() {
		const { url } = this.props;
		return (
			<div className="iframe-content">
				<iframe id="ifrm" src={url} style={{ border: 0, width: '100%', height: '100%', position: 'absolute' }}></iframe>
			</div>
		);
	}
}
