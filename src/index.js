import Mirador from 'mirador/dist/es/src/index';
import annotationPlugins from 'mirador-annotations';
import SimpleAnnotationServerV2Adapter from 'mirador-annotations/es/SimpleAnnotationServerV2Adapter';

/*
 Export Mirador and annotation plugins to Global
*/

const pluginsFromMiradorAnnotations = [...annotationPlugins];
const exports = {
  Mirador, SimpleAnnotationServerV2Adapter, pluginsFromMiradorAnnotations
};

export default exports;

