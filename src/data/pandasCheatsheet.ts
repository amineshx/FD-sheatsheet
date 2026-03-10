export type CheatItem = {
    id: string
    title: string
    description: string
    code: string
    tags: string[]
}

export type CheatSection = {
    id: string
    title: string
    items: CheatItem[]
}

export const pandasCheatsheet: CheatSection[] = [

    {
        id: "import",
        title: "Importing Libraries",
        items: [

            {
                id: "import-pandas",
                title: "Import Pandas",
                description: "Imports the pandas library using the standard alias pd.",
                code: `import pandas as pd`,
                tags: ["setup"]
            },

            {
                id: "import-numpy",
                title: "Import NumPy",
                description: "NumPy is commonly used with pandas for numerical operations.",
                code: `import numpy as np`,
                tags: ["setup"]
            }

        ]
    },

    {
        id: "loading",
        title: "Loading Data",
        items: [

            {
                id: "read-csv",
                title: "Read CSV",
                description: "Loads a CSV file into a pandas DataFrame.",
                code: `df = pd.read_csv("file.csv")`,
                tags: ["io"]
            },

            {
                id: "read-excel",
                title: "Read Excel",
                description: "Reads an Excel spreadsheet into a DataFrame.",
                code: `df = pd.read_excel("file.xlsx")`,
                tags: ["io"]
            },

            {
                id: "read-json",
                title: "Read JSON",
                description: "Loads JSON data into a DataFrame.",
                code: `df = pd.read_json("file.json")`,
                tags: ["io"]
            }

        ]
    },

    {
        id: "exploration",
        title: "Data Exploration",
        items: [

            {
                id: "head",
                title: "Head",
                description: "Shows the first rows of the DataFrame.",
                code: `df.head()`,
                tags: ["exploration"]
            },

            {
                id: "tail",
                title: "Tail",
                description: "Shows the last rows of the dataset.",
                code: `df.tail()`,
                tags: ["exploration"]
            },

            {
                id: "info",
                title: "Info",
                description: "Displays summary information about the DataFrame.",
                code: `df.info()`,
                tags: ["exploration"]
            },

            {
                id: "shape",
                title: "Shape",
                description: "Returns number of rows and columns.",
                code: `df.shape`,
                tags: ["exploration"]
            },

            {
                id: "columns",
                title: "Columns",
                description: "Returns column labels.",
                code: `df.columns`,
                tags: ["exploration"]
            }

        ]
    },

    {
        id: "statistics",
        title: "Descriptive Statistics",
        items: [

            {
                id: "describe",
                title: "Describe",
                description: "Generates descriptive statistics for numerical columns.",
                code: `df.describe()`,
                tags: ["statistics"]
            },

            {
                id: "mean",
                title: "Mean",
                description: "Computes mean values.",
                code: `df.mean()`,
                tags: ["statistics"]
            },

            {
                id: "median",
                title: "Median",
                description: "Computes median values.",
                code: `df.median()`,
                tags: ["statistics"]
            },

            {
                id: "quantile",
                title: "Quantiles",
                description: "Computes quantile values.",
                code: `df.quantile(0.25)`,
                tags: ["statistics"]
            }

        ]
    },

    {
        id: "cleaning",
        title: "Data Cleaning",
        items: [

            {
                id: "isnull",
                title: "Check Missing Values",
                description: "Returns a boolean mask showing missing values.",
                code: `df.isnull()`,
                tags: ["cleaning"]
            },

            {
                id: "sum-null",
                title: "Count Missing Values",
                description: "Counts missing values per column.",
                code: `df.isnull().sum()`,
                tags: ["cleaning"]
            },

            {
                id: "dropna",
                title: "Drop Missing Values",
                description: "Removes rows containing missing values.",
                code: `df.dropna()`,
                tags: ["cleaning"]
            },

            {
                id: "fillna",
                title: "Fill Missing Values",
                description: "Replaces missing values with a constant.",
                code: `df.fillna(0)`,
                tags: ["cleaning"]
            },

            {
                id: "duplicates",
                title: "Remove Duplicates",
                description: "Removes duplicate rows.",
                code: `df.drop_duplicates()`,
                tags: ["cleaning"]
            }

        ]
    },

    {
        id: "filtering",
        title: "Filtering & Selection",
        items: [

            {
                id: "select-column",
                title: "Select Column",
                description: "Access a single column.",
                code: `df["age"]`,
                tags: ["filter"]
            },

            {
                id: "filter-condition",
                title: "Filter Rows",
                description: "Filters rows based on a condition.",
                code: `df[df["age"] > 30]`,
                tags: ["filter"]
            },

            {
                id: "loc",
                title: "loc Indexing",
                description: "Select rows and columns by labels.",
                code: `df.loc[0:5, ["name","age"]]`,
                tags: ["indexing"]
            },

            {
                id: "iloc",
                title: "iloc Indexing",
                description: "Select rows and columns by integer positions.",
                code: `df.iloc[0:5, 0:2]`,
                tags: ["indexing"]
            }

        ]
    },

    {
        id: "grouping",
        title: "Grouping & Aggregation",
        items: [

            {
                id: "groupby",
                title: "Group By",
                description: "Groups rows by a column.",
                code: `df.groupby("category")`,
                tags: ["aggregation"]
            },

            {
                id: "groupby-mean",
                title: "Group By Mean",
                description: "Computes mean for grouped data.",
                code: `df.groupby("category").mean()`,
                tags: ["aggregation"]
            },

            {
                id: "agg",
                title: "Multiple Aggregations",
                description: "Apply multiple aggregation functions.",
                code: `df.groupby("category").agg(["mean","sum"])`,
                tags: ["aggregation"]
            }

        ]
    },

    {
        id: "export",
        title: "Exporting Data",
        items: [

            {
                id: "to-csv",
                title: "Export CSV",
                description: "Exports the DataFrame to CSV.",
                code: `df.to_csv("output.csv", index=False)`,
                tags: ["export"]
            },

            {
                id: "to-excel",
                title: "Export Excel",
                description: "Exports the DataFrame to Excel.",
                code: `df.to_excel("output.xlsx")`,
                tags: ["export"]
            }

        ]
    }

]