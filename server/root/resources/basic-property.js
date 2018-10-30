const warpjsUtils = require('@warp-works/warpjs-utils');

module.exports = (entity, instance, basicPropertyName) => {
    const basicProperty = entity.getBasicPropertyByName(basicPropertyName);

    return warpjsUtils.createResource('', {
        id: basicProperty ? `${basicProperty.getInstanceId(instance)}-${basicProperty.name}` : `${instance._id || instance.id}-${basicPropertyName}`,
        type: basicProperty ? basicProperty.propertyType : 'string',
        field: basicProperty ? basicProperty.name : basicPropertyName,
        value: basicProperty ? basicProperty.getValue(instance) : instance[basicPropertyName],
    });
};
