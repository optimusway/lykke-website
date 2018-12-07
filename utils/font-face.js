import {createGlobalStyle} from 'styled-components';
import {fontFace} from 'polished';

const GlobalFontFace = createGlobalStyle`
  // Regular font face
  
  ${fontFace({
      'fontFamily': 'Proxima Nova',
      'fontWeight': '200',
      'fontFilePath': 'static/fonts/ProximaNovaThin',
      'fileFormats': ['eot','woff','ttf','svg']
    }
  )}
  
  ${fontFace({
      'fontFamily': 'Proxima Nova',
      'fontWeight': '300',
      'fontFilePath': 'static/fonts/ProximaNova-Light',
      'fileFormats': ['eot','woff','ttf','svg']
    }
  )}
  
  ${fontFace({
      'fontFamily': 'Proxima Nova',
      'fontWeight': '400',
      'fontFilePath': 'static/fonts/ProximaNovaRegular',
      'fileFormats': ['eot','woff','ttf','svg']
    }
  )}
  
  ${fontFace({
      'fontFamily': 'Proxima Nova',
      'fontWeight': '600',
      'fontFilePath': 'static/fonts/ProximaNova-Semibold',
      'fileFormats': ['eot','woff','ttf','svg']
    }
  )}
  
  ${fontFace({
      'fontFamily': 'Proxima Nova',
      'fontWeight': '700',
      'fontFilePath': 'static/fonts/ProximaNovaBold',
      'fileFormats': ['eot','woff','ttf','svg']
    }
  )}
  
  ${fontFace({
      'fontFamily': 'Proxima Nova',
      'fontWeight': '900',
      'fontFilePath': 'static/fonts/ProximaNova-Black',
      'fileFormats': ['eot','woff','ttf','svg']
    }
  )}
  
  // Headings
  
  ${fontFace({
      'fontFamily': 'Akrobat',
      'fontWeight': '400',
      'fontFilePath': 'static/fonts/Akrobat-Regular',
      'fileFormats': ['eot','woff','ttf','svg']
    }
  )}
  
  ${fontFace({
      'fontFamily': 'Akrobat',
      'fontWeight': '600',
      'fontFilePath': 'static/fonts/Akrobat-SemiBold',
      'fileFormats': ['eot','woff','ttf','svg']
    }
  )}
  
  ${fontFace({
      'fontFamily': 'Akrobat',
      'fontWeight': '700',
      'fontFilePath': 'static/fonts/Akrobat-Bold',
      'fileFormats': ['eot','woff','ttf','svg']
    }
  )}
  
  ${fontFace({
      'fontFamily': 'Akrobat',
      'fontWeight': '900',
      'fontFilePath': 'static/fonts/akrobat-black',
      'fileFormats': ['eot','woff','ttf','svg']
    }
  )}
`;

export default GlobalFontFace;
