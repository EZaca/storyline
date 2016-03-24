/**
 * ***************************************************************
 * 
 *                       HOW DO I USE IT?
 *                     
 * ***************************************************************
 *
 * Call in node JS:
 *
 * node <this-file> <your-source>
 *
 * Example:
 *
 * node genclass.js classes/my-wonderful-file-of-classes.js
 *
 * /!\ The source file has no required extension.
 * /!\ All files generated here will be ".js" and ".md" files.
 * 
 * ***************************************************************
 * 
 *                       HOW CREATE THE FILE?
 *                     
 * ***************************************************************
 * 
 * Insert a line with "// @doc " to define the documentation folder of current
 * class WITH a trailing slash.
 *     Example:
 *     // @doc ../docs/classes/
 *     
 * Insert a line with "// @src " to define the source folder of current
 * class WITH a trailing slash.
 *     Example:
 *     // @doc ../src/myWonderfulSubDir/
 *
 * Insert a line with "// @authors " to define the author.
 *     Example:
 *     // @authors My most wonderful name, the name of the other guy
 *
 * Insert a line starting with "class " to define the start of a new class
 *     Example:
 *     class PrettyClass
 *     class PrettyClass extends NotSoPrettyClass
 *
 * Insert a line starting with "var " to define a variable.
 * Define a variable and a "set" method using "setter" keyword:
 *     var MyVariable = undefined setter
 *     
 * Define a variable without the "set" method:
 *     var MyVariable = myValue
 *
 * Define a private variable (without "set", "field" is ignored)
 *     var _myPrivateVariable = 12345
 *
 * Insert a line starting with "function " to define a function.
 * Example:
 *     function hello (myArg1, myArg2, myArg3)
 *     function hello (myArgWithDefault="Hello", another=25, other=undefined)
 *     function hello_func (myArg1, myArg2, ...)
 * 
 * Insert a line starting with "event on" to define an event and create its caller.
 *     event onLoad (myArgs, LikeFunction="Wonderful!")
 *
 * 
 * That's all! For a while...
 *
 * 
 * Important:
 *     - Variables with a String as value are not supported.
 *     - Variables with array items are not supported.
 *     - Variables must have a value, even if it is "undefined".
 *     - Function arguments can't have parenthesis token inside "(" or ")".
 *     - Event names must start with a lowercase "on"
 *
 *     - Spaces starting or ending the line are not important.
 *     - Indentation is accepted but not required.
 *
 *
 *
 */

/* ***************************************************************
 * 
 *                         SOURCE CODE
 *                     
 * *************************************************************** */


fs = require('fs');

/**
 * Generator object
 *
 * @var basePath
 * @var docFolder
 * @var srcFolder
 * @var template
 * 
 * @function exec
 * @function arrayOfLines
 * @function getTemplateLines
 * @function genSource
 * 
 */

Generator = {

    basePath : (__dirname+'/'),

    /**
     * Execute the generation for one file passed by argument.
     */
    exec : function(filename){
        // This is the file content
        var content = fs.readFileSync(filename, 'utf8');
        content = content.replace(/\r/g, '');

        // These are lines
        // from the file content
        var lines = this.arrayOfLines(content);

        // These are templates
        // from the lines
        // from the file content
        var template = this.getTemplateLines(lines);
        if (template.errors.length > 0)
        {
            for(var i in template.errors)
                console.error('    - ',template.errors[i]);
            console.error('Fix the errors and try again!');
            return;
        }

        // These are sources
        // from the templates
        // from the lines
        // from the file content
        var sources = this.genSource(template.items);

        // Write to file
        // the returned sources
        // from the templates
        // from the lines
        // from the file content
        this.writeAll(sources);
    },

    /**
     * Get the content as string and return an array with non-empty lines.
     */
    arrayOfLines : function(content)
    {
        // Handle line breaks
        var lines = String(content).split('\n\r');
        if (lines.length == 1)
            lines = String(content).split('\r\n');
        if (lines.length == 1)
            lines = String(content).split('\r');
        if (lines.length == 1)
            lines = String(content).split('\n');

        // Prepare the lines and return
        var linesFinal = [];
        for (var i=0; i<lines.length; i++)
        {
            if (lines[i].trim() != '')
                linesFinal.push(lines[i].trim());
        }
        return lines;
    },

    /**
     * Get the array of lines and return an array with the template items.
     */
    getTemplateLines : function(lines)
    {
        var items = [];
        var errors = [];
        var item;
        var line;
        for(var i=0; i<lines.length; i++)
        {
            line = lines[i].trim();
            if (line.startsWith('// @authors '))
            {
                item = {};
                item.type = 'set-authors';
                item.name = line.substr(12);
                items.push(item);
            }
            else if (line.startsWith('// @doc '))
            {
                item = {};
                item.type = 'set-doc';
                item.name = line.substr(8);
                items.push(item);
            }
            else if (line.startsWith('// @src '))
            {
                item = {};
                item.type = 'set-src';
                item.name = line.substr(8);
                items.push(item);
            }
            else if (line.startsWith('class '))
            {
                item = {};
                item.type = 'class';
                var exp = /class\s+(\w+)\s*(?:(extends)\s*(\w+))?/;
                var result = exp.exec(line);
                if (result == null)
                {
                    errors.push('Invalid class: '+line);
                    continue;
                }
                item.name = result[1];
                item.extend = '';
                if (result[3])
                    item.extend = result[3];
                items.push(item);
            }
            else if (line.startsWith('var '))
            {
                item = {};
                item.type = 'var';
                var exp = /var (\w+)\s*=\s*(\w+|\[\])\s*(setter)?/;
                var result = exp.exec(line);
                if (result == null)
                {
                    errors.push('Invalid var: '+line);
                    continue;
                }
                item.name = result[1];
                item.value = result[2];
                item.hasSetter = (result[3] == 'setter');
                items.push(item);
            }
            else if (line.startsWith('function '))
            {
                item = {};
                item.type = 'function';
                var exp = /function (\w+)\((.*)\)/;
                var result = exp.exec(line);
                if (result == null)
                {
                    errors.push('Invalid function: '+line);
                    continue;
                }
                item.name = result[1];
                item.plain = result[2];
                item.args = '';
                item.params = result[2].split(',');
                if (item.params[0] == '')
                    item.params = [];

                for(var j=0;j<item.params.length;j++)
                {
                    var plain = item.params[j];
                    var pos = plain.indexOf('=');
                    if (pos > 0)
                    {
                        item.params[j] = {};
                        item.params[j].name = plain.substr(0,pos).trim();
                        item.params[j].value = plain.substr(pos+1).trim();
                    } else
                        item.params[j] = {'name':plain.trim()};
                    
                    if (item.name != '...')
                    {
                        if(item.args != '')
                            item.args += ', ';
                        item.args += item.params[j].name;
                    }
                }
                items.push(item);
            }
            else if (line.startsWith('event '))
            {
                item = {};
                item.type = 'event';
                var exp = /event (on\w+)\((.*)\)/;
                var result = exp.exec(line);
                if (result == null)
                {
                    errors.push('Invalid event: '+line);
                    continue;
                }
                item.name = result[1];
                item.plain = result[2];
                item.args = '';
                item.params = result[2].split(',');
                if (item.params[0] == '')
                    item.params = [];
                
                for(var j=0;j<item.params.length;j++)
                {
                    var plain = item.params[j];
                    var pos = plain.indexOf('=');
                    if (pos > 0)
                    {
                        item.params[j] = {};
                        item.params[j].name = plain.substr(0,pos).trim();
                        item.params[j].value = plain.substr(pos+1).trim();
                    } else
                        item.params[j] = {'name':plain.trim()};
                    
                    if (item.name != '...')
                    {
                        if(item.args != '')
                            item.args += ', ';
                        item.args += item.params[j].name;
                    }
                }
                items.push(item);
            }
        }

        return {
            'items' : items,
            'errors' : errors
        };
    },

    /**
     * Get the array of template lines and convert into an array-like of
     * Javascript files, where the name is the index and value is the content.
     */
    genSource : function (template)
    {
        var srcFiles = [];
        var docFiles = [];
        var item;
        var docFolder = '/';
        var srcFolder = '/';
        var authors = '';
        var className = '';
        var classStr = '';
        var classExtends = '';
        var docStr = '';

        for (var i=0; i<template.length; i++)
        {
            item = template[i];
            switch (item.type)
            {
                case 'set-authors':
                    authors = item.name.trim();
                break;
                case 'set-doc':
                    docFolder = item.name.trim();
                break;
                case 'set-src':
                    srcFolder = item.name.trim();
                break;
                case 'class':
                    if (className != '')
                    {
                        // Finish class
                        classStr = classStr.replace(/\{\{add\-field\}\}/g, '');
                        classStr = classStr.replace(/\{\{add\-function\}\}/g, '');

                        // Create the file and doc
                        srcFiles[srcFolder+className+'.js'] = classStr;
                        docFiles[docFolder+className+'.md'] = docStr;
                        className = '';
                        classExtends = '';
                        classStr = '';
                        docStr = '';
                    }

                    // Begin DOC
                    docStr += '# '+item.name+'\n\n';
                    if (item.extend != '')
                        docStr += 'The class inherits `'+item.extend+'`.\n\n';
                    // End DOC

                    className = item.name.trim();
                    console.log('Parsing class: ',className);

                    classStr += '/**\n';
                    if (item.extend != '')
                        classStr += ' * class {{0}} extends {{1}}'.fmt(item.name,item.extend);
                        classStr += ' * class {{0}}'.fmt(item.name);

                    classStr += ('\n * \n'+
                                ' * @authors {{0}}\n'+
                                ' * @generator node genclass.js\n'+
                                ' * @license MIT License\n'+
                                ' * @copyright (c) 2016 Storyline\n'+
                                ' */\n\n'+
                                'function {{1}}()\n'+
                                '{\n')
                                .fmt(authors, item.name);
                    if (item.extend != '')
                    {
                        classStr += '    // Inherit base fields\n\n'+
                                    '    {{0}}.apply(this,arguments);\n\n'.fmt(item.extend);
                    }
                    classStr += '    // Initialize fields\n'+
                                '    {{add-field}}\n'+
                                '    return this;\n'+
                                '}\n\n';

                    if (item.extend != '')
                    {
                        classStr +=('/// @extends {{1}}\n'+
                                    '{{0}}.prototype = new {{1}}();\n'+
                                    '{{0}}.prototype.constructor = {{0}};\n\n'
                                    ).fmt(item.name, item.extend);
                    }
                    classStr += '{{add-function}}';

                break;

                case 'var':
                    var fieldText = '';
                    fieldText += 'this.{{0}} = {{1}};'.fmt(item.name,item.value);
                    fieldText += '\n    {{add-field}}';
                    classStr = classStr.replace(/\{\{add\-field\}\}/g, fieldText);

                    var upName = item.name.charAt(0).toUpperCase() + item.name.substr(1);
                    var funcText = '';
                    if (item.hasSetter)
                    {
                        funcText =('{{0}}.prototype.set{{1}} = function(value)\n'+
                                   '{\n'+
                                   '    item.{{2}} = value;\n'+
                                   '};\n\n{{add-function}}'
                                   ).fmt(className, upName, item.name);
                        classStr = classStr.replace(/\{\{add\-function\}\}/g, funcText);
                    }

                    // Begin DOC
                    docStr += '## Field '+item.name+'\n\n';
                    docStr += '    Field: '+item.name+'\n';
                    docStr += '    Default: '+item.value+'\n';
                    docStr += '    Getter: '+item.name+'\n';
                    if (funcText != '')
                        docStr += '    Setter: set'+upName+'(value)\n';
                    docStr += '    Visibility: '+((item.name.charAt(0)=='_')?'protected':'public')+'\n';
                    docStr += '\nDescription...\n\n';
                    // End DOC
                break;

                case 'function':
                    var funcText =('{{0}}.prototype.{{1}} = function({{2}})\n'+
                                   '{\n'+
                                   '    // TODO: Insert code here\n'+
                                   '};\n\n'+
                                   '{{add-function}}'
                                  ).fmt(className, item.name, item.args);
                    
                    classStr = classStr.replace(/\{\{add\-function\}\}/g, funcText);

                    // Begin DOC
                    docStr += '## Method '+item.name+'\n\n';
                    docStr += '    '+((item.name.charAt(0)=='_')?'protected':'public');
                    docStr += '\n\nDescription...\n\n';
                    docStr += '### Parameters\n\n';
                    if (item.params.length <= 0)
                        docStr += 'This method has no parameter.\n';
                    else
                    for(var p=0; p<item.params.length;p++)
                        docStr += '    '+item.params[p].name+((typeof item.params[p].value != 'undefined')?' (default '+item.params[p].value+')':'')+'\n';
                    docStr += '\n### Return value\n\n';
                    docStr += 'This method does not return.\n\n';
                    // End DOC
                break;

                case 'event':
                    var doName = 'do'+item.name.substr(2);

                    var fieldText =('this.{{0}} = undefined;\n'+
                                    '    {{add-field}}'
                                   ).fmt(item.name);

                    var eventText =('{{0}}.prototype.{{1}} = function({{2}})\n'+
                                    '{\n'+
                                    '    if (this.{{3}} instanceof Function)\n'+
                                    '        this.{{3}}({{2}});\n'+
                                    '};\n\n'+
                                    '{{add-function}}'
                                   ).fmt(
                                        className, // 0 - class name
                                        doName,    // 1 - event caller name
                                        item.args, // 2 - event arguments
                                        item.name  // 3 - event field name
                                   );
                    
                    classStr = classStr.replace(/\{\{add\-field\}\}/g, fieldText);
                    classStr = classStr.replace(/\{\{add\-function\}\}/g, eventText);

                    // Begin DOC
                    docStr += '## Event '+item.name+'\n\n';
                    docStr += 'Description...\n\n';
                    docStr += '### Caller\n\n';
                    docStr += '    '+doName+'('+item.args+')'+'\n\n';
                    docStr += '### Callback parameters\n\n';
                    if (item.params.length <= 0)
                        docStr += 'This event receives no parameter.\n';
                    else
                    for(var p=0; p<item.params.length;p++)
                        docStr += '    '+item.params[p].name+((typeof item.params[p].value != 'undefined')?' (default '+item.params[p].value+')':'')+'\n';
                    docStr += '\n### Return value\n\n';
                    docStr += 'The event does not expect a return.\n\n';
                    // End DOC
                break;
            }
        }

        return {
            'classes' : srcFiles,
            'docs' : docFiles
        };
    },

    writeAll : function(sources)
    {
        console.log('Base path:',this.basePath);
        for (var i in sources.classes)
        {
            console.log('Creating ',i);
            fs.writeFileSync(this.basePath+i, sources.classes[i], {encoding:'utf8'});
        }
        for (i in sources.docs)
        {
            console.log('Creating ',i);
            fs.writeFileSync(this.basePath+i, sources.docs[i], {encoding:'utf8'});
        }
    }

};

String.prototype.fmt = function() {
    var result = String(this);
    for (var i=0; i<arguments.length; i++)
        result = result.replace(RegExp('\\{\\{'+i+'\\}\\}','g'), arguments[i]);
    return result;
};

var args = process.argv;
if (args.length >= 3)
{
    var filename = args[2];
    console.log('Starting generator');
    Generator.exec(filename);
    console.log('Generator finished');
} else
    console.log('Argument expected: filename');