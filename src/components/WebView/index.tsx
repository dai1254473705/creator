import React, { Component } from 'react';
interface InnerProps {
	src: string;
	id: string;
}
export default class WebView extends Component<InnerProps, any> {
	render() {
		const { id, src } = this.props;
		return (
			<div className="iframe-content">
				<webview id={id} src={src} style={{ width: '100%', height: '100%' }}></webview>
			</div>
		);
	}
}
