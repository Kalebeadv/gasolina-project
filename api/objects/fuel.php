<?php

/**
*
*/
class Category {
    //database connection and table name
    private $conn;
    private $table_name = "fuel";

    //object properties
    public $id;
    public $idGasstation
    public $type;
    public $valor;
    public $createAt;

    function __construct($db) {
        $this->conn = $db;
    }

    //used by select drop down list
    public function read() {
        //select all data
        $query = "SELECT id, idGasstation,type, valor FROM
                    ".$this->table_name." ORDER BY 1";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }
}

?>