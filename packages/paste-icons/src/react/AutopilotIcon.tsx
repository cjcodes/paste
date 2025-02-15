/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface AutopilotIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const AutopilotIcon: React.FC<AutopilotIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg
          role="img"
          aria-hidden={decorative}
          aria-labelledby={uid}
          height="100%"
          width="100%"
          viewBox="0 0 1024 1024"
        >
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M956.1 68.267H580.633 444.1 68.633C48.153 68.267 34.5 81.92 34.5 102.4v341.333c0 20.48 13.653 34.134 34.133 34.134H956.1c20.48 0 34.133-13.654 34.133-34.134V102.4c0-20.48-17.066-34.133-34.133-34.133M921.967 409.6h-819.2V136.533h819.2V409.6M956.1 546.133H68.633c-20.48 0-34.133 13.654-34.133 34.134v409.6c0 20.48 13.653 34.133 34.133 34.133h136.534c10.24 0 17.066-3.413 23.893-10.24l78.507-78.507 78.506 78.507c6.827 6.827 17.067 10.24 23.894 10.24 6.826 0 17.066-3.413 23.893-10.24 13.653-13.653 13.653-34.133 0-47.787l-102.4-102.4-10.24-10.24 112.64-112.64c13.653-13.653 13.653-34.133 0-47.786-13.653-13.654-34.133-13.654-47.787 0L249.54 829.44c-13.653 13.653-13.653 34.133 0 47.787l10.24 10.24-68.267 68.266h-88.746V614.4h819.2v341.333H833.22l-68.267-68.266 10.24-10.24c13.654-13.654 13.654-34.134 0-47.787L638.66 692.907c-13.653-13.654-34.133-13.654-47.787 0-13.653 13.653-13.653 34.133 0 47.786l112.64 112.64-112.64 112.64c-13.653 13.654-13.653 34.134 0 47.787 6.827 6.827 17.067 10.24 23.894 10.24 6.826 0 17.066-3.413 23.893-10.24l78.507-78.507 78.506 78.507c3.414 3.413 6.827 6.827 10.24 6.827 3.414 3.413 10.24 3.413 13.654 3.413H956.1c20.48 0 34.133-13.653 34.133-34.133v-409.6c0-20.48-17.066-34.134-34.133-34.134m-648.533-204.8c37.546 0 68.266-30.72 68.266-68.266 0-37.547-30.72-68.267-68.266-68.267-37.547 0-68.267 30.72-68.267 68.267 0 37.546 30.72 68.266 68.267 68.266m409.6 0c37.546 0 68.266-30.72 68.266-68.266 0-37.547-30.72-68.267-68.266-68.267-37.547 0-68.267 30.72-68.267 68.267 0 37.546 30.72 68.266 68.267 68.266m-136.534-307.2C580.633 13.653 566.98 0 546.5 0h-68.267C457.753 0 444.1 13.653 444.1 34.133V102.4H580.633V34.133"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

AutopilotIcon.defaultProps = {
  title: 'Autopilot Icon',
  decorative: true,
};

export {AutopilotIcon};
