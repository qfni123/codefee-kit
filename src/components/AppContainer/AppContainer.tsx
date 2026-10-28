import { CodefeeTheme, ITheme } from 'common/Theme';
import React, { FC, ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalResetCss } from './AppContainer.styled';

export interface AppContainerProps {
  children?: ReactNode;
  appTheme?: ITheme;
  requireCssReset?: boolean;
  suppressMultiMountWarning?: boolean;
}

export const GlobalStyle = createGlobalStyle<AppContainerProps>`
  :root{
    ${({ appTheme }) => {
      if (appTheme === undefined) {
        return [];
      }

      const x: string[] = Object.keys(appTheme).map(
        (key: string) => `${key}: ${appTheme[key as keyof ITheme]};`
      );
      return x;
    }}

  ${({ requireCssReset }) => (requireCssReset ? GlobalResetCss : null)}
`;

const AppContainer: FC<AppContainerProps> = ({
  children,
  appTheme,
  requireCssReset,
}: AppContainerProps) => (
  <>
    <GlobalStyle appTheme={appTheme} requireCssReset={requireCssReset} />
    {children}
  </>
);

AppContainer.displayName = 'AppContainer';
AppContainer.defaultProps = {
  children: undefined,
  appTheme: CodefeeTheme,
  requireCssReset: true,
};

export default AppContainer;
