/**
 * iconfont 仓库地址
 * https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1049577
 *
 */
import React from 'react';
type IProps = {
	name: string;
	className?: string;
	onClick?(e: any): void;
};
const CustomIcon = (props: IProps) => {
	const { name, onClick, className } = props;
	return (
		<svg className={`icon svg-icon ${className}`} aria-hidden="true" onClick={onClick}>
			<use xlinkHref={`#${name}`}></use>
		</svg>
	);
};

export default CustomIcon;
