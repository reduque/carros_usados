<div class="cu-points">
    <h3 class="cu-points__title">Certificación de condición técnica</h3>
    <div class="cu-points__wrapper">
        <ul class="cu-points__points">
        <?php
            $grupo='';
        ?>
        @foreach ($carro->puntos_intermedia as $item)
            <?php if($grupo <> $item->punto->grupo->grupo){ ?>
            <li class="full">
                <h5>{{$item->punto->grupo->grupo}}</h5>
            </li>
            <?php
                $grupo = $item->punto->grupo->grupo;
            }?>
            <li>
                <p><span>{{ $item->punto->punto}}</span></p>
                <div class="{{ ($item->respuesta) ? 'activo' : 'inactivo'}}"></div>
            </li>
        @endforeach
        </ul>
    </div>
</div>