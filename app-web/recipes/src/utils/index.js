export const getImageField = (imgObj) => {
    const data = imgObj?.data?.[0]?.attributes || {};
    return data;
};

