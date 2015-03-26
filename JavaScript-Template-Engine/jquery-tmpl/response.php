<?php

    function response () {
//        $name = $_POST['name'];
//        $age = $_POST['age'];

        /*
        $str = array(
            'id' => 001,
            'list' => array(
                array (
                    'name' => 'Walker王001',
                    'age' => 20
                ),
                array (
                    'name' => 'Walker王002',
                    'age' => 22
                ),
                array (
                    'name' => 'Walker王003',
                    'age' => 23
                ),
                array (
                    'name' => 'Walker王004',
                    'age' => 24
                ),
                array (
                    'name' => 'Walker王005',
                    'age' => 25
                )
            )
        );*/

        $str = array (
            'name' => 'Walker王',
            'age' => 25
        );

        $class = new stdClass();

        // urlencode 防止中文乱码
        foreach ( $str as $key => $value ) {
//            echo $str;
                $str[$key] = urlencode( $value );
//            $class->$key = $value;
        }

//        print_r( $class );
        // urldecode 对urlencode后的中文进行解码
        echo urldecode( json_encode($str) );
//        echo json_encode($str);


//        echo "王";
    }

    response();

?>