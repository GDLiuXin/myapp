import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from "react";
const Footer: React.FC = () => {
  const defaultMessage = '个人技术出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '用户管理中心',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '官网',
          href: 'https://ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 流心 GitHub</>,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },

      ]}
    />
  );
};
export default Footer;
