from lxml import etree

xml_file = '001-formulario.xml'
xml_doc = etree.parse(xml_file)

xsd_file = '001-descriptor.xsd'
with open(xsd_file, 'rb') as schema_file:
    schema_doc = etree.parse(schema_file)
    xml_schema = etree.XMLSchema(schema_doc)

is_valid = xml_schema.validate(xml_doc)

if is_valid:
    print("The XML file is valid.")
else:
    print("The XML file is not valid.")
    log = xml_schema.error_log
    for error in log:
        print(error.message)
