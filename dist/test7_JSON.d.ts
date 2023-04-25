type JSONObject = {
    [index: string]: JSONValue;
};
type JSONArray = JSONValue[];
type JSONValue = number | string | boolean | null | JSONArray | JSONObject;
declare function isJSON(arg: JSONValue): void;
