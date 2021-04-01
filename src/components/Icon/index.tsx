/**
 * iconfont 仓库地址
 * https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1049577
 *
 */
import React from 'react';
const CustomIcon = (props: any) => {
	const iconName = props.name;
	console.log('iconName', iconName);
	return (
		<svg className="icon svg-icon" aria-hidden="true">
			<use xlinkHref={`#${iconName}`}></use>
		</svg>
	);
};

export default CustomIcon;
