export interface ISchema {
    $schema: string;
    description: string;
    properties: { [name: string]: { type: string, description: string } },
    required: string[];
    title: string;
    type: string;
}
