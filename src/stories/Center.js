import React from 'react';

const styles = {
    textAlign: 'center',
    padding: '100px',
    height: '100%',
    width: '100%',
};
const Center = ({ children }) => <div style={styles}>{children}</div>;

export const withCenter = storyFn => <Center>{storyFn()}</Center>

export default Center;